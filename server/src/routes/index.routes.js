import { Router } from "express";
import usersRoute from './users.routes.js';

const router = Router();

router.get('/info', (req, res) =>{
    res.json({
        Nombre: "Daniel Tene",
        Descripcion: "Prueba Parcial II",
        Semestre: "Octavo"
    })
})

router.get('/data', (req, res) =>{
    res.json({
        status: true,
        message: "success",
        version: 1.1
    })
})

router.use('/users', usersRoute);



export default router;