const prod = require("../services/products.dao.js");

async function getProducts() {
    try {
        const products = await prod.list();
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function addProduct({ datos }) {
    try {
        const product = await prod.save(datos);
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function deleteProduct({ id }) {
    try {
        const product = await prod.deleteOne(id);
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function updateProduct({ datos }) {
    try {
        const { _id, nombre, precio, url } = datos;
        const product = await prod.updateOne(_id, {
            nombre,
            precio,
            url,
        });
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct,
};
