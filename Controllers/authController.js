const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const UserModel = require("../models/usersModel.js");

class authController {
  static validateRegistration = async (req, res) => {
    let validated=false;
    console.log(req.body);
    const { email, password} = req.body;
    // Checks if User already exists
    const user = await UserModel.getUserFromDB(email);
    if (user.length > 0) {return res.status(401).json("User exists"),validated=true;}

    if(!validated){
const name = await UserModel.getUserFromDB(email)
let firstName = name.first;}
return res.status(201).json(`Successfully Registered!, ${firstName}`);
    
    // Hash the password and create user using model
    const hashedPassword = bcrypt.hashSync(password, 10);
   
   
  };

  static check  = async (req, res) => {
  
    const name = await UserModel.getAllUsersFromDB()
    return res.status(201).json(`${name}`);
  }

  
  static validateLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.getUserFromDB(email);
    if (user.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }
    const validation = await bcrypt.compare(password, user[0].password);
    if (!validation) {
      return res.status(404).json({ message: "Incorrect Password" });
    }
    // JWT

    const token = jwt.sign({ userId: user[0].id }, "Your_Secret_Key", {
      expiresIn: "1d",
    });
    //
    const refreshToken = jwt.sign({ userId: user[0].id }, "Your_Secret_Key", {
      expiresIn: "7d",
    });
    user[0].isAuth = true;
    return res.status(200).json({
      message: "Logged in successfully 😊 👌",
      token,
      user: user[0],
      refreshToken,
    });
  };

  static logOut = async (req, res) => {
    return res.clearCookie("access_token").status(200).json("Signed out");
  };

  static authenticate = async (req, res) => {
    const token = req.body.refreshToken;
    if (!token) {
      return res.status(401).json(`Not authenticated`);
    }
    jwt.verify(token, "Your_Secret_Key", async (err, decoded) => {
      if (err) {
        return res.status(401).json(`Not authenticated`);
      } else {
        try {
          const id = decoded.id;
          const user = await UserModel.getUserFromDBByID(id);
          const accessToken = jwt.sign(user[0], "Your_Secret_Key", {
            expiresIn: "1d",
          });
          user[0].isAuth = true;
          return res.status(201).json({
            token: accessToken,
            user,
          });
        } catch (err) {
          return res.status(401).json("Not authenticated");
        }
      }
    });
  };
}
module.exports = authController