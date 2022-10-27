const UserModel = require("../models/usersModel.js");


    const getAllUsers = async (req, res) => {
        const users = await UserModel.getAllUsersFromDB();
        return res.status(201).json(users);
    }

    const getSingleUser = async (req, res) => {
        const userId = req.params.id;
        const user = await UserModel.getSingleUserFromDB(userId);
        return res.status(201).json(user);
    };

    const getSingleUserById = async (req, res) => {
        const userId = req.params.id;
        const user = await UserModel.getSingleUserFromDBByID(userId);
        return res.status(201).json(user);
    };

    const createUser = async (req, res) => {
        const data = req.body
        console.log(req.body)
        const user = await UserModel.createUserFromDb(data.firstName, data.lastName, data.email, data.password)
        return res.status(201).json(user);

    }
    module.exports={getAllUsers,getSingleUser,getSingleUserById,createUser}

