const express = require("express");
const {
    Router
} = require("express");


const carts = Router();
//cart controller
const Cart = require("../controllers/cart.controller");

//estructura carrito
carts.post("/", async (req, res) => {
    const data = await Cart.createCart();
    res.status(201).json(data);
});
carts.get("/", async (req, res) => {
    const data = await Cart.getCarts();
    res.status(201).json(data);
});

carts.delete("/:id", async (req, res) => {
    let id = req.params.id;
    const data = await Cart.deleteItem(id);
    res.json(data);
});

carts.get("/:id/productos", async (req, res) => {
    let id = req.params.id;
    let data = await Cart.getItem(id);
    res.status(201).json(data.products);
});
carts.post("/:id_cart/productos/:id_prod", async (req, res) => {
    let id_cart = req.params.id_cart;
    let id_prod = req.params.id_prod;
    const data = await Cart.addProduct(id_cart, id_prod);
    res.json(data);
});

carts.delete("/:id_cart/productos/:id_prod", async (req, res) => {
    let id_cart = req.params.id;
    let id_prod = req.params.id_prod;
    const data = await Cart.deletProduct(id_cart, id_prod);
    res.json(data);
});

module.exports = carts;