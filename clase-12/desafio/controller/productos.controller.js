const data = require("../data/productos");
class Productos {
  static getAll(){
    return data.listOfproduct();
  }
  static add(producto){
    return data.addProduct(producto);
  }
}

module.exports = Productos;