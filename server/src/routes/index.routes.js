import { Router } from "express";
import usersRoute from './users.routes.js';
import { variableConfig } from '../config/variables.config.js';
//import fetch from "node-fetch";

const router = Router();

router.get('/apiv3/info', (req, res) =>{
    res.json({
        status: 200,
        message: "successfully",
        body: [
            {
                api: "n-capas",
                port: 8000,
                url: "/apiv3",
                sh: true
                //command: "pm2 start backen"
            }
        ]
    })
})

router.get('/apiv3/data', async(req, res) =>{

    async function getDeployments(){
        const urlActions = 'https://api.github.com/repos/DanielConduri/n-capas/actions/runs?page='
        const response = await fetch(`${urlActions}${1}`, {
            headers: { Authorization: `token ${variableConfig.token}` },
        });
        if (!response.ok) throw new Error(`Error fetching deployments: ${response.status}`);
        return await response.json({});
    }

    const deployments = await getDeployments();
    
    
    res.json({
        status: true,
        message: "success",
        version: 1.1,
        body: deployments
    })

    
})



router.get('/apiv3/prod', (req, res) =>{
    res.json({
        status: true,
        message: "success",
        body: [
            {id: 1, name: "Person 1", name: "Juan", age: 25, city: "Ambato"},
            {id: 2, name: "Person 2", name: "Daniel", age: 27, city: "Riobamba"},
            {id: 3, name: "Person 3", name: "Ely", age: 24, city: "Quito"},
            {id: 4, name: "Person 4", name: "Pedro", age: 29},
            // {id: 5, name: "Person 5", name: "Jonathan", age: 27},
        ]
    })
})

router.use('/apiv3/users', usersRoute);



export default router;