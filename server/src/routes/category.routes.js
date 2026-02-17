import { Router } from "express";
import categoryController from '../controllers/category.controllers.js';

const router = Router();


router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryId);

export default router;