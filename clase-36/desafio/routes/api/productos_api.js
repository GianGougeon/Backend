const express = require("express");
const { Router } = require("express");
const listaProductos = Router();
const ProductosController = require("../../controller/prod.controller");

const logger = require("../../middlewares/logger");

listaProductos.get("/", (req, res) => {
    try {
        ProductosController.getAll().then((data) => {
            res.status(200).send(data);
        });
        logger.info(`LLamada a todos los productos`);
    } catch (err) {
        logger.warn(err);
        res.status(500).json(err);
    }
});

listaProductos.get("/:id", (req, res) => {
    try {
        const id = req.params.id;
        ProductosController.getOne(id).then((data) => {
            res.status(200).send(data);
        });
        logger.info(`Producto con id: ${id} encontrado`);
    } catch (err) {
        logger.warn(err);
        res.status(500).send(err);
    }
});

listaProductos.post("/", (req, res) => {
    try {
        logger.info(`Nuevo producto agregado, metodo`);
        res.send(ProductosController.add(req.body));
    } catch (err) {
        logger.warn(err);
        res.status(500).send(err);
    }
});

module.exports = listaProductos;
