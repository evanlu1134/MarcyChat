const UserModel = require("../models/usersModel.js");

class UserController {
    static getAllUsers = async (req, res) => {
        const users = await UserModel.getAllUsersFromDB();
        return res.status(201).json(users);
    };

    static getSingleUser = async (req, res) => {
        const userId = req.params.id;
        const user = await UserModel.getSingleUserFromDB(userId);
        return res.status(201).json(user);
    };

    static  getSingleUserById = async (req, res) => {
        const userId = req.params.id;
        const user = await UserModel.getSingleUserFromDBByID(userId);
        return res.status(201).json(user);
    };

    static createUser = async (req, res) => {
        const data = req.body
        console.log(req.body)
        const user = await UserModel.createUserFromDb(data.firstName, data.lastName, data.email, data.password);
        return res.status(201).json(user);

    }
}

module.exports = UserController;