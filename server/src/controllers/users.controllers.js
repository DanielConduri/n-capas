import userRepository from '../repositories/userRepository.js';
import userService from '../services/user.service.js';

const createUser = async (req, res) => {


    try {
        const { name, age } = req.body;
        const user = await userService.createUser(req.body);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body: [],
        });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body: [],
        });
    }
}

const getUserId = async (req, res) => {

    try {
        const userId = await userService.getUserId(req.params);
        res.json(userId);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body: [],
        });
    }
}

export default {
    createUser,
    getUsers,
    getUserId
}