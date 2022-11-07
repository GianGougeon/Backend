const express = require("express");
const auth = require("./../middlewares/auth.js");

const productos = express.Router();

// busca el avatar

productos.get("/", auth, (req, res) => {
    res.render("productos");
});

module.exports = productos;
