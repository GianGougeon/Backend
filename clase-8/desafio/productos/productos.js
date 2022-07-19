const productos = []
let id = 1
// retorna todos los productos
const listOfproduct = () => {
    return productos
}
// si no encuentra el producto tira un error
const getProduct = (id) => {
    const product = productos.find(product => product.id == id)
    if (product == null) {
        return {
            error: 'Producto no encontrado'
        }
    } else {
        return product
    }
}
// agrega un producto, si esta vacio tira un error
const addProduct = (product) => {
    if (product.nombre == '' || product.precio == '' || product.url == '') {
        return {
            error: 'Ingrese todos los datos'
        }
    } else {
        const producto = {
            id: id,
            nombre: product.nombre,
            precio: product.precio,
            url: product.url
        }
        productos.push(producto)
        id++
        return producto
    }
}

// actualiza un producto, si el producto no existe tira un error
const updateProduct = (id, nProducto) => {
    const product = getProduct(parseInt(id))
    if ((product.id == id) && (product.id != null)) {
        productos[productos.indexOf(product)] = nProducto
        return nProducto
    } else {
        return {
            error: 'Producto no encontrado'
        }
    }
}
// elimina un producto, si el producto no existe tira un error
const deleteProduct = (id) => {
    const product = getProduct(parseInt(id))
    if ((product.id == id) && (product.id != null)) {
        productos.splice(productos.indexOf(product), 1)
        return 'Producto eliminado'
    } else {
        return {
            error: 'Producto no encontrado'
        }

    }
}
// exporta las funciones
module.exports = {
    listOfproduct,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}