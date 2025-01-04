import request from "supertest";
import { server, startServer, stop } from "../server/src/index.js"

afterAll(() => {
    stop();
});

describe("Recipes API Endpoints", () => {
    test("GET /apiv3/info", async () => {
        const res = await request(server).get("/apiv3/info");

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([
            {
                api: "n-capas",
                port: 7000,
                url: "/apiv3",
                command: "pm2 start backen"
            }
        ])
       
    })
})
