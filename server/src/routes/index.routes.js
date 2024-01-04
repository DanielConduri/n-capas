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

router.use('/users', usersRoute);



export default router;