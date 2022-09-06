import ContenedorArchivo from "../../ContenedorArchivo.js";
import fs from "fs/promises";

const cart = "./DB/cart.json";
const productos = "./DB/products.json";

class CarritosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super(cart);
    }

    async save() {
        try {
            let arr = await super.getAll();
            let id = arr.length + 1;
            let obj = { id: id, products: [], timestamp: Date.now() };
            arr.push(obj);
            await fs.writeFile(cart, JSON.stringify(arr, null, 2));
            return `Carrito id: ${id} creado con éxito`;
        } catch (err) {
            throw new Error(err);
        }
    }

    async addProduct(id_cart, id_prod) {
        try {
            let arr = await super.getAll();
            let arr_prod = await fs.readFile(productos, "utf-8");
            arr_prod = JSON.parse(arr_prod);

            let index = arr.findIndex((el) => el.id == id_cart);
            let index_prod = arr_prod.findIndex((el) => el.id == id_prod);

            if (index === -1) {
                throw new Error(`No se encontró el carrito ${id_cart}`);
            }
            if (index_prod === -1) {
                throw new Error(`No se encontró el producto ${id_prod}`);
            }

            arr[index].products.push(arr_prod[index_prod]);

            await fs.writeFile(cart, JSON.stringify(arr, null, 2));
            return "Producto Agregado";
        } catch (err) {
            throw new Error(err);
        }
    }
}

export { CarritosDaoArchivo };
