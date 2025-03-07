import { User } from '../models/user.models.js'


const createUser = async (parameter) => {
    try {
        const newUser = await User.create(
            {
                str_user_name: parameter.name,
                int_user_age: parameter.age
            } 
        );
        return newUser;
    } catch (error) {
        console.log(error);
        return error;
    }
};


const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        //console.log(users)
        return users;
    } catch (error) {
        console.log(error);
        return error;
    }
};


const getUserId = async (parameter) => {
    try {
        const userId = await User.findByPk(parameter.id);
        return userId;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default {
    createUser,
    getAllUsers,
    getUserId
}