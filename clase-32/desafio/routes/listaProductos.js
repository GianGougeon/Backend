const express = require("express");
const { Router } = require("express");
const listaProductos = Router();
const ProductosController = require("../controller/prod.controller");

const logger = require("../middlewares/logger");

listaProductos.get("/", (req, res) => {
    ProductosController.getAll().then((data) => {
        res.status(200).send(data);
    });
});

listaProductos.post("/", (req, res) => {
    logger.info(`Nuevo producto agregado ${req.originalUrl}`);
    res.send(ProductosController.add(req.body));
});

module.exports = listaProductos;
