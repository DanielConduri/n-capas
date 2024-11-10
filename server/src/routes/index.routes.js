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

router.get('/apiv3/prod', (req, res) =>{
    res.json({
        status: true,
        message: "success",
        body: [
            {id: 1, name: "Prod 1"},
            {id: 2, name: "Prod 2"},
            {id: 3, name: "Prod 3"}
            

        ]
    })
})

router.use('/apiv3/users', usersRoute);



export default router;