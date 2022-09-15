const data = require("../data/productos");
class Productos {
    static async getAll() {
        return await data.listOfproduct();
    }
    static add(producto) {
        return data.addProduct(producto);
    }
}

module.exports = Productos;
