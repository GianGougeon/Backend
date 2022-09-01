import express, { json } from "express";
const app = express();
import db from "./db/index.js";
import "./models/index.js";


db.sync({ force: true})
    .then(function () {
        // Recién ahora estamos seguros que la conexión fue exitosa
        app.listen(3000, () =>
            console.log("Servidor escuchando en el puerto 3000")
        );
    })
    .catch(console.error);
