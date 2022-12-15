/*========== Modulos globales para DAOs ==========*/
const MongoDBClient = require("../classes/mongo.class");
const CustomError = require("../classes/error.class");
const ProductsDAO = require("./products.dao.js");
const CartModel = require("../models/cart.model.js");
/*========== Clase DAO para carritos ==========*/
class CartDAO {
    constructor() {
        this.colecction = new ProductsDAO().colecction;
        this.cartColecction = CartModel;
        this.mongo = new MongoDBClient();
    }
    //funcion que crea un carrito segun el idUser
    async create(id) {
        try {
            await this.mongo.connect();
            const cart = new this.cartColecction({ idUser: id, products: [] });
            await cart.save();
            return cart;
        } catch (error) {
            const objErr = new CustomError(
                500,
                "Error al crear el carrito",
                error
            );
            throw objErr;
        }
    }
    //funcion que devuelve todos los carritos
    async getAll() {
        try {
            await this.mongo.connect();
            const docs = await this.cartColecction.find();
            return docs;
        } catch (error) {
            const objErr = new CustomError(
                500,
                "Error al listar los carritos",
                error
            );
            throw objErr;
        }
    }
    //funcion para agregar un producto a un carrito segun el idUser y el id del producto
    async addProduct(id_cart, id_prod) {
        try {
            await this.mongo.connect();
            const cart = await this.cartColecction.findOne({ idUser: id_cart });
            const prod = await this.colecction.findOne({ _id: id_prod });
            cart.products.push(prod);
            await cart.save();
            return cart;
        } catch (error) {
            const cuserr = new CustomError(500, "Error addProduct()", error);
            logger.error(cuserr);
            throw cuserr;
        }
    }
    //funcion que muestra el contenido de un carrito segun el idUser
    async getItem(id) {
        try {
            await this.mongo.connect();
            const doc = await this.cartColecction.findOne({ idUser: id });
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, "Error al listarOne()", error);
            logger.error(cuserr);
            throw cuserr;
        }
    }

    //funcion que elimina un carrtio segun el id del usuario de mongo
    async deleteItem(id) {
        try {
            await this.mongo.connect();
            const doc = await this.cartColecction.findOneAndDelete({
                idUser: id,
            });
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, "Error al listarOne()", error);
            logger.error(cuserr);
            throw cuserr;
        }
    }

    //funcion para eliminar porducto segun id a un carrito segun el id
    async deleteProduct(id_cart, id_prod) {
        try {
            await this.mongo.connect();
            const cart = await this.cartColecction.findOne({ idUser: id_cart });
            const prod = await this.colecction.findOne({ _id: id_prod });
            cart.products.pull(prod);
            await cart.save();
            return cart;
        } catch (error) {
            const cuserr = new CustomError(500, "Error al listarOne()", error);
            logger.error(cuserr);
            throw cuserr;
        }
    }
}
module.exports = CartDAO;
