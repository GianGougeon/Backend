//importo cart
const CartDAO = require("../services/cart.dao.js");

const cart = new CartDAO();

//controller
class Carrito {
    // funcion que crea un carrito segun el idUser
    static async createCart(id) {
        await cart.create(id);
    }
    // funcion que muestra todos los carritos
    static async getCarts() {
        return await cart.getAll();
    }
    // funcion que agrega un producto a un carrito segun el idUser y el id del producto
    static async addProduct(idCart, idProd) {
        return await cart.addProduct(idCart, idProd);
    }
    // funcion que muestra el contenido de un carrito segun el idUser
    static async getItem(id) {
        return await cart.getItem(id);
    }
    // funcion que elimina un carrito segun el idUser
    static async deleteItem(id) {
        return await cart.deleteItem(id);
    }
    // funcion que elimina un producto de un carrito segun el idUser  y el id del producto
    static async deleteProduct(idCart, idProd) {
        return await cart.deleteProduct(idCart, idProd);
    }
}

module.exports = Carrito;
