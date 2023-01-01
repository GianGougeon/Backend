require("../db/config");
const Prod = require("../models/products.model");

const save = async (producto) => {
    const productoGuardado = await Prod.create(producto);
    return productoGuardado;
};

const list = async () => {
    const productos = await Prod.find();
    return productos;
};
const getOne = async (id) => {
    try {
        const producto = await Prod.findById(id);
        return producto;
    } catch (err) {
        return false;
    }
};

const update = async (id, producto) => {
    try {
        const productoActualizado = await Prod.findByIdAndUpdate(id, producto);
        return productoActualizado;
    } catch (err) {
        return err;
    }
};

const remove = async (id) => {
    const producto = await Prod.findByIdAndDelete(id);
    return producto;
};

module.exports = { save, list, getOne, update, remove };
