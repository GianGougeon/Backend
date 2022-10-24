require("../db/config");
const Prod = require("../models/Prod");

const logger = require("../middlewares/logger");

const save = async (prod) => {
    try {
        const newProduct = new Prod(prod);
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

module.exports = { save, list };
