// import {describe, expect, test} from '@jest/globals';

//Si usas ES Modules
import { describe, it, expect, test} from '@jest/globals';
import request from "supertest";
import sumar from './sumar.js';

import app from '../src/app.js'

import {sequelize} from "../src/database/database.js"
// import {  startServer, stop, stopServer} from '../src/index.js'


// afterAll(() => {
//     stopServer();
// });

let server;
beforeAll(() => {
    // Inicia el servidor si es necesario (en pruebas con sockets, por ejemplo)
    const port = 3005; 
    server = app.listen(port, () => console.log("Test server running in port", port));
});
  
afterAll((done) => {
    // Cierra el servidor y otros recursos asíncronos
    server.close(done);
});

afterAll(async () => {
    await sequelize.close();
    
});



describe("Products API Endpoints", () => {
    test("GET /apiv3/info", async () => {
        const res = await request(app).get("/apiv3/info");
        //console.log(res)
        expect(res.status).toEqual(200);
        expect(res.body).toBeTruthy();
        expect(res.body.body[0]).toEqual({
            api: "n-capas",
            port: 8000,
            url: "/apiv3",
            sh: true,
            docker_compose: 'v3',
        });
        
    })

    test("GET /apiv3/users", async () => {

        const res = await request(app).get("/apiv3/users");
        //console.log(res)
        expect(res.status).toEqual(200);
        expect(res.body).toBeTruthy();
        expect(res.body.message).toEqual('User successfully');

    })

    test("GET /apiv3/users/:cod", async () => {
        const res = await request(app).get("/apiv3/users/1");
        //console.log(res)
        expect(res.status).toEqual(200);
        expect(res.body).toBeTruthy();
        expect(res.body.message).toEqual('User found');
        expect(res.body.body).toEqual({
            "int_user_id": 1,
            "str_user_name": "MATHIAS TENE",
            "int_user_age": 4,
            "dt_date_creation": "2024-10-04T00:23:13.381Z"
        });

    })
});




// describe('Test', () => {
//     test('sumar 1 + 2 es igual a 3', () => {
//         expect(sumar(1, 2)).toBe(3);
//     });
// })

// describe('Test', () => {
//     test('sumar 1 + 2 es igual a 3', () => {
//         expect(sumar(1, 8)).toBe(9);
//     });
// })



// describe('sum function', () => {
//   it('should add two numbers', () => {
//     expect(sumar(1, 2)).toBe(3);
//   });

//   it('should add two numbers', () => {
//     expect(sumar(3, 7)).toBe(10);
//   });

//   it('should add two numbers', () => {
//     expect(sumar(13, 7)).toBe(20);
//   });
// });



// Si usas CommonJS
// const { describe, it, expect } = require('@jest/globals');
// const sum = require('./sum');


