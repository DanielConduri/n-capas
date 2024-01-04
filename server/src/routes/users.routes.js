import { Router } from "express";
import userController from '../controllers/users.controllers.js';

const router = Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
export default router;