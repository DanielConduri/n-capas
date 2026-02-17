import categoryRepository from '../repositories/category-repository.js';
import categoryService from '../services/category.service.js';

const createCategory = async (req, res) => {
    try {
        const { name, age } = req.body;
        const category = await categoryService.getCategories(req.body);
        res.json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body: [],
        });
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await categoryService.getCategories();
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body: [],
        });
    }
}

const getCategoryId = async (req, res) => {

    try {
        const categoryId = await categoryService.getCategoryId(req.params);
        res.json(categoryId);
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
    createCategory,
    getCategories,
    getCategoryId
}