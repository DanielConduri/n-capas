import userRepository from '../repositories/userRepository.js';
import { sequelize } from '../database/database.js';

const createUser = async (parameter) => {
    try {
        const newUser = await userRepository.createUser(parameter);
        if (newUser) {
            return {
                status: true,
                message: "User created successfully",
                body: newUser,
            }
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};

const getUserId = async (parameter) => {
    //console.log(parameter)
    try {
        const getUserId = await userRepository.getUserId(parameter);
        if (getUserId) {
            return {
                status: true,
                message: "User found",
                body: getUserId,
            }
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};


const getUsers = async () => {

    try {
        const users = await userRepository.getAllUsers();
        if (users) {
            return {
                status: true,
                message: "User successfully",
                body: users,
            }
        }
    } catch (error) {
        console.error(error);
        return error;
    }

};

export default {
    createUser,
    getUsers,
    getUserId
}
