import { Router } from "express";
import usersRoute from './users.routes.js';

const router = Router();

router.get('/apiv3/info', (req, res) =>{
    res.json({
        Nombre: "Daniel Tene",
        Descripcion: "Prueba Parcial II",
        Semestre: "Octavo"
    })
})

router.get('/apiv3/data', (req, res) =>{
    res.json({
        status: true,
        message: "success",
        version: 1.1
    })
})

router.use('/apiv3/users', usersRoute);



export default router;