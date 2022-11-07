//importo cart
const cart = require("../utils/cart");
//controller
class Carrito {
    // funcion que crea un carrito segun el idUser
    static createCart(id) {
        return cart.create(id);
    }
    static addProduct(idCart, idProd) {
        return cart.addProduct(idCart, idProd);
    }
    // funcion que muestra todos los carritos
    static getCarts() {
        return cart.getAll();
    }
    // funcion que muestra el contenido de un carrito segun el idUser
    static getItem(id) {
        return cart.getItem(id);
    }
    // funcion que elimina un carrito segun el idUser
    static deleteItem(id) {
        return cart.deleteItem(id);
    }
    // funcion que elimina un producto de un carrito segun el idUser  y el id del producto
    static deleteProduct(idCart, idProd) {
        return cart.deleteProduct(idCart, idProd);
    }
}

module.exports = Carrito;
