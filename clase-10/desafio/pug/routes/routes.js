const express = require("express");
const router = express.Router();

const productos = require("./listaProductos");
const home = require("./home");

//middlewares
router.use("/productos", productos);
router.use("/", home);

module.exports = router;
