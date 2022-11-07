const express = require("express");
const logger = require("../middlewares/logger");
const error = express.Router();
const ignoreFavicon = require("../middlewares/ignoreFavicon");

error.use(ignoreFavicon)


error.get("/", (req, res) => {
    res.send({
        error: "404",
        descripcion: "Ruta inexistente",
    });
    // rutas inexistentes
    logger.warn(
        `Ruta inexistente ${req.originalUrl} -- Metodo:${req.method} -- IP: ${req.ip}`
    );
});
error.post("/", (req, res) => {
    res.send({
        error: "404",
        descripcion: "Ruta inexistente",
    });
    // rutas inexistentes
    logger.warn(
        `Ruta inexistente ${req.originalUrl} -- Metodo:${req.method} -- IP: ${req.ip}`
    );
});
error.put("/", (req, res) => {
    res.send({
        error: "404",
        descripcion: "Ruta inexistente",
    });
    // rutas inexistentes
    logger.warn(
        `Ruta inexistente ${req.originalUrl} -- Metodo:${req.method} -- IP: ${req.ip}`
    );
});
error.delete("/", (req, res) => {
    res.send({
        error: "404",
        descripcion: "Ruta inexistente",
    });
    // rutas inexistentes

    logger.warn(
        `Ruta inexistente ${req.originalUrl} -- Metodo:${req.method} -- IP: ${req.ip}`
    );
});

module.exports = error;
