/*========== Modulos globales para DAOs ==========*/
const CustomError = require("../classes/error.class");
const MongoDBClient = require("../classes/mongo.class");
const ProductoModel = require("../models/products.model");
/*========== Clase DAO para productos ==========*/
class ProductsDAO {
    constructor() {
        this.colecction = ProductoModel;
        this.mongo = new MongoDBClient();
    }

    // funcion que crea un producto y lo guarda en la base de datos
    async save(producto) {
        try {
            await this.mongo.connect();
            const newProd = new this.colecction(producto);
            await newProd.save();
            return newProd;
        } catch (error) {
            const objErr = new CustomError(
                500,
                "Error al crear el producto",
                error
            );
            throw objErr;
        } finally {
            await this.mongo.disconnect();
        }
    }
    // funcion que devuelve todos los productos
    async list() {
        let docs = [];
        try {
            await this.mongo.connect();
            docs = await this.colecction.find({});
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, "Error al listarAll()", error);
            throw cuserr;
        } finally {
            this.mongo.disconnect();
        }
    }
    // funcion que devuelve un producto segun el id
    async getOne(id) {
        try {
            await this.mongo.connect();
            const doc = await this.colecction.findById(id);
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, "Error al listarOne()", error);
            throw cuserr;
        } finally {
            this.mongo.disconnect();
        }
    }
}

module.exports = ProductsDAO;
