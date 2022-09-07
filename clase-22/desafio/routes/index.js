const express = require("express");
const router = express.Router();

const productos = require("./productos");
const home = require("./home");
const fakerRouter = require("./faker");

//middlewares
router.use("/productos", productos);
router.use("/api/productos-test", fakerRouter);
router.use("/", home);

module.exports = router;
