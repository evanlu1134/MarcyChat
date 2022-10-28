const UserModel = require("../models/usersModel.js");



    const getAllUsers = async (req, res) => {
        const users = await UserModel.getAllUsersFromDB();
        return res.status(201).json(users);
    }

    // const getAllUsersInfo = async (req, res) => {
    //     const id = req.params.id;
    //     const user = await UserModel.getAllUsersInfoFromDB(id);
    //     console.log(user.first_name)
    //     return res.status(200).json(user);
    // };

    const getSingleUser = async (req, res) => {
        const userId = req.params.id;
        const user = await UserModel.getSingleUserFromDB(userId);
        return res.status(201).json(user.first_name);
    };



    const getSingleUserById = async (req, res) => {
        const userId = req.params.id;
        const user = await UserModel.getSingleUserFromDBByID(userId);
        return res.status(201).json(user);
    };

    const createUser = async (req, res) => {
        const {first_name, last_name, email, password} = req.body
        console.log(req.body)
        const user = await UserModel.createUserFromDb(first_name, last_name, email, password)
        return res.status(201).json(user);

    }
    module.exports={getAllUsers,getSingleUser,getSingleUserById,createUser}

