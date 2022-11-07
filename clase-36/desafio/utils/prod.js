require("../db/config");
const Prod = require("../models/prod");

const logger = require("../middlewares/logger");

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

const list = async () => {
    try {
        const productos = await Prod.find();
        return productos;
    } catch (error) {
        logger.error("Error al obtener los productos");
        console.log(error);
    }
};
const getOne = async (id) => {
    try {
        const producto = await Prod.findById(id);
        return producto;
    } catch (error) {
        logger.error("Error al obtener el producto");
        console.log(error);
    }
};
module.exports = { save, list, getOne };
