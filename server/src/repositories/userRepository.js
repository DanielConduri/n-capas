import { User } from '../models/user.models.js'
import { validateIdentification } from '../utils/util.js';


const createUser = async (parameter) => {
     if (!validateIdentification(parameter.cedula)) {
      return {
        message: "La cédula ingresada no es válida" ,
        status: 400 
      }
    }

    const user = await User.findOne({ where: { cedula: parameter.cedula } });
    if(user) {
        return {
            status: false,
            message: "EL usuario ya se encuentra registrado",
        }
    }
    try {
        const newUser = await User.create(parameter);
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


const getUserId = async (parameter) => {
    try {
        const userId = await User.findOne({ where: { cedula: parameter.id } });
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