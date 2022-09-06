import express from "express";

import dotenv from "dotenv";
dotenv.config();

const app = express();
import { router } from "./router/index.js";

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

//servidor
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log(`Servidor escuchando el puerto: ${server.address().port}`);
});

server.on("error", (error) => `Server error:${error}`);
