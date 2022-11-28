const ProductsDAO = require("../services/products.dao.js");

const prod = new ProductsDAO();

class Productos {
    // funcion que devuelve todos los productos
    static async getAll() {
        return prod.list();
    }
    // funcion que devuelve un producto segun el id
    static getOne(id) {
        return prod.getOne(id);
    }
    // funcion que crea un producto y lo guarda en la base de datos
    static add(producto) {
        return prod.save(producto);
    }
}
module.exports = Productos;
