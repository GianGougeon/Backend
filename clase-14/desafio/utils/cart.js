const productos = require("./productos");
const {
    time
} = require("./productos");



const carts = [];
let id = 1;

//funcion que crea un carrito
const create = () => {
    let cart = {
        id: id,
        products: [],
        timestamp: time()
    };
    id++;
    carts.push(cart);
    return cart;
};

//funcion que devuelve todos los carritos
const getAll = async () => {
    if (carts.length === 0) {
        return {
            Error: "No hay Carrito"
        };
    }
    return carts;
};

//funcion que elimina un carrtio segun el id
const deleteItem = (item) => {
    if (carts.length === 0) {
        return {
            Error: "No hay Carritos"
        };
    }
    let index = carts.findIndex((i) => i.id == item);
    if (index == -1) {
        return {
            error: "Carrito no encontrado"
        };
    }
    carts.splice(index, 1);
    return "Carrito Eliminado";

};

//funcion que muestra el contenido de un carrito segun el id
const getItem = (x) => {
    if (carts.length === 0) {
        return {
            Error: "No hay Carritos"
        };
    }
    return carts.find((el) => el.id == x) || {
        error: "Carrito no encontrado"
    };
};

//funcion para agregar un producto a un carrito segun el id

const addProduct = (id_cart, id_prod) => {
    if (carts.length === 0) {
        return {
            Error: "No hay Carritos"
        };
    }

    let indexCart = carts.findIndex((el) => el.id == id_cart);
    if (indexCart == -1) {
        return {
            error: "Carrito no encontrado"
        };
    }

    const products = productos.list();
    let indexProduct = products.findIndex((el) => el.id == id_prod);
    if (indexProduct == -1) {
        return {
            error: "Producto no encontrado"
        };
    }

    carts[indexCart].products.push(products[indexProduct]);
    return "Producto Agregado";
};

//funcion para eliminar porducto segun id a un carrito segun el id
const deletProduct = (id_cart, id_prod) => {
    if (carts.length === 0) {
        return {
            Error: "No hay Carritos"
        };
    }

    let indexCart = carts.findIndex((el) => el.id == id_cart);
    if (indexCart == -1) {
        return {
            error: "Carrito no encontrado"
        };
    }

    const productos = carts[indexCart].products;
    let indexProduct = productos.findIndex((el) => el.id == id_prod);
    if (indexProduct == -1) {
        return {
            error: "Producto no encontrado"
        };
    }

    carts[indexCart].products.splice(indexProduct, 1);
    return "Producto Eliminado";
};

module.exports = {
    create,
    getAll,
    getItem,
    deleteItem,
    addProduct,
    deletProduct,
};