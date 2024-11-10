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
            {id: 1, name: "Person 1", name: "Juan", age: 25},
            {id: 2, name: "Person 2", name: "Daniel", age: 27},
            {id: 3, name: "Person 3", name: "Ely", age: 24},
            {id: 4, name: "Person 4", name: "Pedro", age: 29},
            {id: 5, name: "Person 5", name: "Jonathan", age: 27},
        ]
    })
})

router.use('/apiv3/users', usersRoute);



export default router;