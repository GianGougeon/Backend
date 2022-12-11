const mongoose = require("mongoose");
const { expect } = require("chai");
const { describe } = require("mocha");
const supertest = require("supertest");
const app = require("../../server.js");
require("dotenv").config();

let request;
let server;

/*============================[TEST]============================*/

describe("Test api", () => {
    before(async function () {
        await connectDb();
        server = await startServer();
        request = supertest(
            `http://localhost:${server.address().port}/api/productos`
        );
    });

    after(function () {
        mongoose.disconnect();
        server.close();
    });
    // Testeo de la ruta GET /api/productos
    describe("GET", () => {
        it("Metodo GET", async () => {
            const response = await request.get("/");
            expect(response.status).to.equal(200);
        });
    });
    // Testeo de la ruta POST /api/productos
    describe("POST", () => {
        it("Metodo POST", async () => {
            const response = await request.post("/").send({
                nombre: "test",
                precio: 100,
                url: "https://geeks3d.com/public/jegx/2016q3/furmark-logo.jpg",
            });
            expect(response.status).to.equal(200);
        });
    });
    // Testeo de la ruta DELETE /api/productos/:id
    describe("DELETE", () => {
        it("Metodo DELETE", async () => {
            const data = await request.get("/");
            const id = "638ca4d9a46e98c81023e60c";

            const response = await request.delete(`/${id}`);
            expect(response.status).to.equal(200);

            const dataCheck = await request.get("/");
            expect(data.body.length).to.equal(dataCheck.body.length);
        });
    });
    // Testeo de la ruta PUT /api/productos/:id
    describe("PUT", () => {
        it("Metodo PUT", async () => {
            const id = "638ca5150b1799d43b75fcab";
            const prod = {
                nombre: "prueba",
                precio: 100,
                url: "https://geeks3d.com/public/jegx/2016q3/furmark-logo.jpg",
            };
            const response = await request.put(`/${id}`).send(prod);
            const product = await request.get(`/${id}`);
            expect(response.status).to.equal(200);
            expect(product.body.nombre).to.eql(prod.nombre);
            expect(product.body.precio).to.eql(prod.precio);
            expect(product.body.url).to.eql(prod.url);
        });
    });
});

/*============================[Conexion a la base de datos]============================*/

async function connectDb() {
    const URL = process.env.MONGOURL || "mongodb://localhost:27017/test";
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB is connected");
    } catch (error) {
        throw new Error(`Error de conexión en la base de datos: ${err}`);
    }
}

async function startServer() {
    return new Promise((resolve, reject) => {
        const PORT = 0;
        const server = app.listen(PORT, () => {
            console.log(
                `Servidor express escuchando en el puerto ${
                    server.address().port
                }`
            );
            resolve(server);
        });
        server.on("error", (error) => {
            console.log(`Error en Servidor: ${error}`);
            reject(error);
        });
    });
}
