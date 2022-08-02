const productos = []
let id = 1
// retorna todos los productos
const listOfproduct = () => {
    return productos
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


// exporta las funciones
module.exports = {
    listOfproduct,
    addProduct
}