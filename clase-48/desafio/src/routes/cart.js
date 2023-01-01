const express = require("express");
const auth = require("./../middlewares/auth.js");

const cart = express.Router();

cart.get("/", auth, async (req, res) => {
    res.render("cart");
});

module.exports = cart;
