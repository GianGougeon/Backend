const express = require("express");
const { Router } = require("express");
const listaProductos = Router();
const ProductosController = require("../controller/productos.controller");

listaProductos.get("/", (req, res) => {
  res.send(ProductosController.getAll());
});

listaProductos.post("/", (req, res) => {
  res.send(ProductosController.add(req.body));
});

module.exports = listaProductos;
