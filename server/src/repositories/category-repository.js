import { Category } from '../models/category.models.js'


const createCategory = async (parameter) => {
    try {
        const newUser = await User.Category(
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


const getAllCategories = async () => {
    try {
        const categories = await Category.findAll();
        //console.log(users)
        return categories;
    } catch (error) {
        console.log(error);
        return error;
    }
};


const getCategoryId = async (parameter) => {
    try {
        const userId = await User.findByPk(parameter.id);
        return userId;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default {
    createCategory,
    getAllCategories,
    getCategoryId
}