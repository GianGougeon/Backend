const express = require("express");
const { Router } = require("express");
const listaProductos = Router();
const ProductosController = require("../controller/productos.controller");

listaProductos.get("/", (req, res) => {
    ProductosController.getAll().then((data) => {
        res.status(200).send(data);
    });
});

listaProductos.post("/", (req, res) => {
    res.send(ProductosController.add(req.body));
});

module.exports = listaProductos;
