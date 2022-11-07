const prod = require("../utils/prod");
class Productos {
    static getAll() {
        return prod.list();
    }
    static getOne(id) {
        return prod.getOne(id);
    }
    static add(producto) {
        return prod.save(producto);
    }
}
module.exports = Productos;
