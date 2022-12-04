require("../db/config");
const Prod = require("../models/products");

const logger = require("../utils/logger");

// funcion que crea un producto y lo guarda en la base de datos
const save = async (producto) => {
    try {
        const newProduct = new Prod(producto);
        const data = await newProduct.save();
        return data;
    } catch (error) {
        logger.error("Error al guardar el producto");
        console.log(error);
    }
};
// funcion que devuelve todos los productos
const list = async () => {
    try {
        const productos = await Prod.find();
        return productos;
    } catch (error) {
        logger.error("Error al obtener los productos");
        console.log(error);
    }
};
// funcion que devuelve un producto segun el id
const getOne = async (id) => {
    try {
        const producto = await Prod.findById(id);
        return producto;
    } catch (error) {
        logger.error("Error al obtener el producto");
        console.log(error);
    }
};
// funcion que elimina un producto segun el id
const deleteOne = async (id) => {
    try {
        const producto = await Prod.findByIdAndDelete(id);
        return "Producto eliminado", producto;
    } catch (error) {
        logger.error("Error al eliminar el producto");
        console.log(error);
    }
};
// funcion que actualiza un producto segun el id
const updateOne = async (id, producto) => {
    try {
        const productoActualizado = await Prod.findByIdAndUpdate(id, producto)
        return productoActualizado;
    } catch (error) {
        logger.error("Error al actualizar el producto");
        console.log(error);
    }
};
module.exports = { save, list, getOne, deleteOne, updateOne };
