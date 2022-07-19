const productos = require("../productos/productos");
class ProductosController {
  static getAll(){
    return productos.listOfproduct();
  }
  static getOne(id){
    return productos.getProduct(id);
  }
  static add(producto){
    return productos.addProduct(producto);
  }
  static update(id, nProducto){
    return productos.updateProduct(id, nProducto);
  }
  static delete(id){
    return productos.deleteProduct(id);
  }
}

module.exports = ProductosController;