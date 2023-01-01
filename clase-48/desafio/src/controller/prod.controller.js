const prod = require("../services/products.dao.js");
class Productos {
    // funcion para obtener todos los productos
    static getAll() {
        return prod.list();
    }
    // funcion para obtener un producto por id
    static getOne(id) {
        return prod.getOne(id);
    }
    // funcion agregar un producto
    static add(producto) {
        return prod.save(producto);
    }
    // funcion para actualizar un producto
    static update(id, producto) {
        return prod.update(id, producto);
    }
    // funcion para eliminar un producto
    static delete(id) {
        return prod.remove(id);
    }
}
module.exports = Productos;
