import { Product } from '../models/product.models.js'


const createProduct = async (parameter) => {
    try {
        const newProduct = await Product.create(
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


const getAllProducts = async () => {
    try {
        const products = await Product.findAll();
        //console.log(users)
        return products;
    } catch (error) {
        console.log(error);
        return error;
    }
};


const getProductId = async (parameter) => {
    try {
        const productId = await Product.findByPk(parameter.id);
        return productId;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default {
    createProduct,
    getAllProducts,
    getProductId
}