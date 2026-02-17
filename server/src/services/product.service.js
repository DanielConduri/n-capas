import productRepository from '../repositories/product-repository.js';
import { sequelize } from '../database/database.js';

const createProduct = async (parameter) => {
    try {
        const newProduct = await productRepository.createProduct(parameter);
        if (newProduct) {
            return {
                status: true,
                message: "Product created successfully",
                body: newProduct,
            }
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};

const getProductId = async (parameter) => {
    //console.log(parameter)
    try {
        const getProductId = await productRepository.getProductId(parameter);
        if (getProductId) {
            return {
                status: true,
                message: "Product found",
                body: getProductId,
            }
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};


const getProducts = async () => {

    try {
        const products = await productRepository.getAllProducts();
        if (products) {
            return {
                status: true,
                message: "Products retrieved successfully",
                body: products,
            }
        }
    } catch (error) {
        console.error(error);
        return error;
    }

};

export default {
    createProduct,
    getProducts,
    getProductId
}
