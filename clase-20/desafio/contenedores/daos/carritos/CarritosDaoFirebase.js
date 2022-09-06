import ContenedorFirebase from "../../ContenedorFirebase.js";
import admin from "firebase-admin";
const db = admin.firestore();

class CarritosDaoFirebase extends ContenedorFirebase {
    constructor() {
        super("carritos");
    }

    save() {
        try {
            let obj = { products: [] };
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
            let prod = await db.collection("productos").doc(product).get();
            prod = prod.data();
            let cart = await db.collection("carritos").doc(idCart).get();
            cart = cart.data();

            // agregar producto al carrito/products firebase
            cart.products.push(prod);
            await db.collection("carritos").doc(idCart).update(cart);

            return `Producto Agregado`;
        } catch (err) {
            throw new Error("Error de escritura", err);
        }
    }
}

export { CarritosDaoFirebase };
