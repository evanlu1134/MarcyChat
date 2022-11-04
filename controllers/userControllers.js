const UserModel = require("../models/usersModel.js");
const bcrypt = require('bcryptjs')

    const getAllUsers = async (req, res) => {
        const users = await UserModel.getAllUsersFromDB();
        return res.status(201).json(users);
    }
    const getAllUsersInfo = async (req, res) => {
        const user = await UserModel.getAllUsersInfoFromDB();
        return res.status(200).json(user);
    };

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
        const userInfo = await UserModel.createUserFromDb(first_name, last_name, email, password)
        return res.status(201).json(userInfo);

    }
    module.exports={getAllUsers,getSingleUser,getSingleUserById,createUser,getAllUsersInfo}

