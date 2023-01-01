const express = require("express");
const { Router } = require("express");
const carts = Router();
const order = Router();
const User = require("../../models/user.model");
const auth = require("../../middlewares/auth");
/*============================[logger]============================*/

const logger = require("../../utils/logger");

//

const { sendMailNewOrder } = require("../../utils/nodemailer");
const { sendSMS } = require("../../utils/twilio");

/*============================[cart controller]============================*/

const Cart = require("../../controller/cart.controller");

/*============================[Estructura carrito]============================*/

// ruta para retornar todos los carritos, busca si existe el usuario y si existe devuelve el carrito
carts.get("/", async (req, res) => {
    try {
        const cart = await Cart.getCarts();
        res.status(200).send(cart);
        logger.info(`LLamada a todos los carritos`);
    } catch (err) {
        logger.warn(err);
        res.status(500).json(err);
    }
});
// ruta para crear un carrito segun el idUser
carts.post("/", auth, async (req, res) => {
    try {
        const id_cart = req.user._id;
        const data = await Cart.createCart(id_cart);
        logger.info(`Carrito creado con id: ${id_cart}`);
        res.status(201).json(data);
    } catch (err) {
        logger.warn(err);
        res.status(500).json(err);
    }
});
// funcion que elimina un carrito segun el idUser
carts.delete("/:id_cart", auth, async (req, res) => {
    try {
        const id_cart = req.params.id_cart;
        const data = await Cart.deleteItem(id_cart);
        logger.info(`Carrito eliminado con id: ${id_cart}`);
        res.status(201).json(data);
    } catch (err) {
        logger.warn(err);
        res.status(500).json(err);
    }
});
// funcion que muestra el contenido de un carrito segun el idUser
carts.get("/:id_cart/productos", auth, async (req, res) => {
    try {
        const id_cart = req.params.id_cart;
        let data = await Cart.getItem(id_cart);
        logger.info(`Carrito mostrado con id: ${id_cart}`);
        res.status(201).json(data);
    } catch (err) {
        logger.warn(err);
        res.status(500).json(err);
    }
});
// funcion que agrega un producto a un carrito segun el idUser  y el id del producto
carts.post("/:id_cart/productos/:id_prod", auth, async (req, res) => {
    try {
        const id_cart = req.params.id_cart;
        const id_prod = req.params.id_prod;
        const data = await Cart.addProduct(id_cart, id_prod);
        logger.info(`Producto agregado al carrito con id: ${id_cart}`);
        res.status(201).json(data);
    } catch (err) {
        logger.warn(err);
        res.status(500).json(err);
    }
});
// funcion que elimina un producto de un carrito segun el idUser  y el id del producto
carts.delete("/:id_cart/productos/:id_prod", auth, async (req, res) => {
    try {
        const id_cart = req.params.id_cart;
        const id_prod = req.params.id_prod;
        const data = await Cart.deleteProduct(id_cart, id_prod);
        logger.info(`Producto eliminado del carrito con id: ${id_cart}`);
        res.status(201).json(data);
    } catch (err) {
        logger.warn(err);
        res.status(500).json(err);
    }
});
// funcion para realizar una compra
order.post("/:id_cart", auth, async (req, res) => {
    try {
        const id_cart = req.params.id_cart;
        const user_id = req.user._id;

        const user = await User.findById(user_id);
        const data = await Cart.getItem(id_cart);

        sendMailNewOrder(user, data.productos);
        sendSMS(
            data.phone,
            `Nuevo pedido de ${
                user.name
            } el dia ${new Date()} registrado con exito, gracias por su compra!`
        );
        logger.info(`Compra realizada con id: ${id_cart}`);
        res.status(201).json({ msg: "Orden realizada con exito" });
    } catch (err) {
        logger.warn(err);
        res.status(500).json(err);
    }
});

module.exports = { carts, order };
