const express = require("express");
const { Router } = require("express");
const listaProductos = Router();
const ProductosController = require("../../controller/prod.controller");

const logger = require("../../utils/logger");

// funcion que devuelve todos los productos
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
// funcion que devuelve un producto segun el id
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
// funcion que agrega un producto
listaProductos.post("/", (req, res) => {
    try {
        logger.info(`Nuevo producto agregado, metodo`);
        res.send(ProductosController.add(req.body));
    } catch (err) {
        logger.warn(err);
        res.status(500).send(err);
    }
});
// funcion que elimina un producto segun el id
listaProductos.delete("/:id", (req, res) => {
    try {
        const id = req.params.id;
        ProductosController.delete(id).then((data) => {
            res.status(200).send(data);
        });
        logger.info(`Producto con id: ${id} eliminado`);
    } catch (err) {
        logger.warn(err);
        res.status(500).send(
            "Error al eliminar el producto, verifique que el id sea correcto"
        );
    }
});
// funcion que actualiza un producto segun el id
listaProductos.put("/:id", (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, precio, url } = req.body;
        const producto = { nombre, precio, url };
        ProductosController.update(id, producto).then((data) => {
            res.status(200).send(data);
        });
        logger.info(`Producto con id: ${id} actualizado`);
    } catch (err) {
        logger.warn(err);
        res.status(500).send(
            "Error al actualizar el producto, verifique que el id sea correcto"
        );
    }
});

module.exports = listaProductos;
