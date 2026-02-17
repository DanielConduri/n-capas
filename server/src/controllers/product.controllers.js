import productRepository from '../repositories/category-repository.js';
import productService from '../services/product.service.js';

const createProduct = async (req, res) => {
    try {
        const { name, age } = req.body;
        const product = await productService.createProduct(req.body);
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body: [],
        });
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body: [],
        });
    }
}

const getProductId = async (req, res) => {

    try {
        const productId = await productService.getProductId(req.params);
        res.json(productId);
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
    createProduct,
    getProducts,
    getProductId
}