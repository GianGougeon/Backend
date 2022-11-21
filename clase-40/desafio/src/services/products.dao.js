/*========== Modulos globales para DAOs ==========*/
const CustomError = require("../classes/error.class");
const MongoDBClient = require("../classes/mongo.class");
const logger = require("../utils/logger");
const ProductoModel = require("../models/products.model");

class ProductsDAO {
    constructor() {
        this.colecction = ProductoModel;
        this.conn = new MongoDBClient();
    }

    // funcion que crea un producto y lo guarda en la base de datos
    async save(producto) {
        try {
            await this.conn.connect();
            const newProd = new this.colecction(producto);
            await newProd.save();
            return newProd;
        } catch (error) {
            const objErr = new CustomError(
                500,
                "Error al crear el producto",
                error
            );
            logger.error(objErr);
            throw objErr;
        } finally {
            await this.conn.disconnect();
        }
    }
    // funcion que devuelve todos los productos
    async list() {
        let docs = [];
        try {
            await this.conn.connect();
            docs = await this.colecction.find({});
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, "Error al listarAll()", error);
            logger.error(cuserr);
            throw cuserr;
        } finally {
            this.conn.disconnect();
            logger.info(`Elementos listados ${docs.length}`);
        }
    }
    // funcion que devuelve un producto segun el id
    async getOne(id) {
        try {
            await this.conn.connect();
            const doc = await this.colecction.findById(id);
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, "Error al listarOne()", error);
            logger.error(cuserr);
            throw cuserr;
        } finally {
            this.conn.disconnect();
            logger.info(`Elemento listado ${id}`);
        }
    }
}

module.exports = ProductsDAO;
