const ProductsDAO = require("../services/products.dao.js");

const prod = new ProductsDAO();

class Productos {
    // funcion que devuelve todos los productos
    static async getAll() {
        await prod.list();
    }
    // funcion que devuelve un producto segun el id
    static async getOne(id) {
        await prod.getOne(id);
    }
    // funcion que crea un producto y lo guarda en la base de datos
    static  async add(producto) {
        await prod.save(producto);
    }
}
module.exports = Productos;
