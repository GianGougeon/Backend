const express = require("express");
const { Router } = require("express");
const listaProductosRouter = Router();
const ProductosController = require("../controller/productos.controller");

listaProductosRouter.get("/", (req, res) => {
  const productos = ProductosController.getAll()
  res.render('productos', { layout: "index", productos });
});

listaProductosRouter.post("/", (req, res) => {
  const body = req.body;
  const { nombre, precio, url } = body
  ProductosController.add({ nombre, precio, url })
  const productos = ProductosController.getAll()
  res.render('productos', { layout: "index", productos });
});

module.exports = listaProductosRouter;
