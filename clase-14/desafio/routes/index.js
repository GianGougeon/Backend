const express = require("express");
const router = express.Router();

//routers
const products = require("./productRouter");
const cart = require("./carritoRouter");
const error = require("./errorRouter");

//middlewares
router.use("/api/productos", products);
router.use("/api/carrito", cart);
router.use("*", error);

module.exports = router;