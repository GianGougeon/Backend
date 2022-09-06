import ContenedorMemoria from "../../ContenedorMemoria.js";
import { carritos, productos } from "../../../DB/memoria.js";

class CarritosDaoMemoria extends ContenedorMemoria {
    constructor() {
        super(carritos);
    }

    async save() {
        try {
            let id = this.arr.length + 1;
            let obj = { id: id, products: [], timestamp: Date.now() };
            this.arr.push(obj);
            return `Carrito id: ${id} creado con éxito`;
        } catch (err) {
            throw new Error(err);
        }
    }

    async addProduct(idCart, product) {
        try {
            let prod = productos.find((el) => el.id == product);
            let index = this.arr.findIndex((el) => el.id == idCart);
            if (index === -1) {
                throw new Error(`No se encontró el carrito ${idCart}`);
            }
            if (prod === undefined) {
                throw new Error(`No se encontró el producto ${product}`);
            }
            this.arr[index].products.push(prod);

            return "Producto Agregado";
        } catch (err) {
            throw new Error(err);
        }
    }
}

export { CarritosDaoMemoria };
