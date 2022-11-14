const prod = require("../daos/products.dao.js");
class Productos {
    // funcion que devuelve todos los productos
    static getAll() {
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
