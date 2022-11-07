require("../db/config");
const Cart = require("../models/cart");
const productos = require("./prod");


//funcion que crea un carrito
const create = async (ids) => {
    const cart = new Cart({
        idUser: ids,
        productos: [],
    });
    // save cart
    await cart.save();
    return cart;
};

//funcion que devuelve todos los carritos
const getAll = async () => {
    try {
        const data = await Cart.find();
        return data;
    } catch (error) {
        console.log(error);
    }
};

//funcion que elimina un carrtio segun el id del usuario de mongo
const deleteItem = async (idUser) => {
    const data = await Cart.findOne({ idUser: idUser });
    if (data === null) {
        return {
            error: "Carrito no encontrado",
        };
    }
    await Cart.deleteOne({ idUser: idUser });
    return {
        msg: "Carrito eliminado",
    };
};

//funcion que muestra el contenido de un carrito segun el idUser
const getItem = async (idUser) => {
    const data = await Cart.findOne({ idUser: idUser });
    if (data === null) {
        return {
            error: "Carrito no encontrado",
        };
    }
    return data;
    
};

//funcion para agregar un producto a un carrito segun el idUser y el id del producto
const addProduct = async (id_cart, id_prod) => {
    const data = await Cart.findOne({ idUser: id_cart });
    if (data === null) {
        return {
            error: "Carrito no encontrado",
        };
    }
    const product = await productos.getOne(id_prod);
    if (product === null) {
        return {
            error: "Producto no encontrado",
        };
    }
    data.productos.push(product);
    await data.save();
    return data;
};
//funcion para eliminar porducto segun id a un carrito segun el id
const deleteProduct = async (id_cart, id_prod) => {
    const data = await Cart.findOne({ idUser: id_cart });
    if (data === null) {
        return {
            error: "Carrito no encontrado",
        };
    }
    const product = await productos.getOne(id_prod);
    if (product === null) {
        return {
            error: "Producto no encontrado",
        };
    }
    const index = data.productos.indexOf(product);
    data.productos.splice(index, 1);
    await data.save();
    return data;
    
};

module.exports = {
    create,
    getAll,
    getItem,
    deleteItem,
    addProduct,
    deleteProduct,
};
