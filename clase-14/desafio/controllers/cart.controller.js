//importo cart
const cart = require("../utils/cart");
//controller
class Carrito {
    static createCart() {
        const newCartId = cart.create();
        return newCartId;
    }

    static addProduct(x, y) {
        const data = cart.addProduct(x, y);
        return data;
    }

    static getCarts() {
        const data = cart.getAll();
        return data;
    }

    static getItem(id) {
        const data = cart.getItem(id);
        return data;
    }

    static deleteItem(id) {
        const data = cart.deleteItem(id);
        return data;
    }
}

module.exports = Carrito;