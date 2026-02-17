import { Router } from "express";
import productController from '../controllers/product.controllers.js';

const router = Router();


router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductId);

export default router;