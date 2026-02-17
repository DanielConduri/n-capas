import categoryRepository from '../repositories/category-repository.js';
import { sequelize } from '../database/database.js';

const createCategory = async (parameter) => {
    try {
        const newCategory = await categoryRepository.createCategory(parameter);
        if (newCategory) {
            return {
                status: true,
                message: "User created successfully",
                body: newCategory,
            }
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};

const getCategoryId = async (parameter) => {
    //console.log(parameter)
    try {
        const getCategoryId = await categoryRepository.getCategoryId(parameter);
        if (getCategoryId) {
            return {
                status: true,
                message: "User found",
                body: getCategoryId,
            }
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};


const getCategories = async () => {

    try {
        const categories = await categoryRepository.getAllCategories();
        if (categories) {
            return {
                status: true,
                message: "|User successfully",
                body: categories,
            }
        }
    } catch (error) {
        console.error(error);
        return error;
    }

};

export default {
    createCategory,
    getCategories,
    getCategoryId
}
