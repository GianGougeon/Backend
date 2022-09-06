import ContenedorMongoDB from "../../ContenedorMongoDb.js";
import mongoose from "mongoose";

import { Cart } from "../ModelDB.js";

class CarritosDaoMongoDb extends ContenedorMongoDB {
    constructor() {
        super(Cart);
    }
    save() {
        try {
            let obj = {
                products: [],
            };
            let timestamp = new Date().getTime();
            obj.timestamp = timestamp;
            super.save(obj);
            return `Carrito creado con éxito`;
        } catch (err) {
            throw new Error(err);
        }
    }
    async addProduct(idCart, product) {
        try {
            // busca collection products en test
            let prod = await mongoose.connection.db
                .collection("products")
                .findOne({
                    _id: mongoose.Types.ObjectId(product),
                });
            let cart = await mongoose.connection.db
                .collection("carts")
                .findOne({
                    _id: mongoose.Types.ObjectId(idCart),
                });

            // agregar producto al carrito/products mongo
            cart.products.push(prod);
            await mongoose.connection.db.collection("carts").updateOne(
                {
                    _id: mongoose.Types.ObjectId(idCart),
                },
                {
                    $set: cart,
                }
            );
            return `Producto Agregado al carrito ${idCart}`;
        } catch (err) {
            throw new Error("Error de escritura", err);
        }
    }
}

export { CarritosDaoMongoDb };
