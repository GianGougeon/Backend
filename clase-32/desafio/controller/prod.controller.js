const data = require("../utils/Prod");
class Productos {
    static getAll() {
        return data.list();
    }
    static add(producto) {
        return data.save(producto);
    }
}

module.exports = Productos;
