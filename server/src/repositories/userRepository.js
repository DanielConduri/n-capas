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
        return users;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default {
    createUser,
    getAllUsers
}