//import productos
const productos = require("../utils/productos");

//controller
class Products {
    static getAll() {
        const allProducts = productos.list();
        return allProducts;
    }

    static save(object) {
        const idProduct = productos.save(object);
        return idProduct;
    }

    static getItem(x) {
        const data = productos.getItem(x);
        return data;
    }

    static deleteItem(x) {
        const data = productos.deleteItem(x);
        return data;
    }

    static modifyItem(x, object) {
        const data = productos.modifyItem(x, object);
        return data;
    }
}

module.exports = Products;