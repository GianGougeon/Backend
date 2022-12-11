const axios = require("axios");

const url = "http://localhost:8080/api/productos";

// todos los productos
const apiAllProducts = async () => {
    try {
        const response = await axios.get(url);
        console.log("Todos los productos: Metodo GET", response.data);
    } catch (error) {
        console.log(error);
    }
};
// get producto por id
const apiGetProduct = async (id) => {
    try {
        const response = await axios.get(`${url}/${id}`);
        console.log(`Producto ID:${id}, Metodo GET: `, response.data);
    } catch (error) {
        console.log(error);
    }
};
// post producto
const apiPostProduct = async (product) => {
    try {
        const response = await axios.post(url, product);
        console.log("Producto Guardado: Metodo POST", response.data);
    } catch (error) {
        console.log(error);
    }
};
// edita producto
const editProduct = async (id, product) => {
    try {
        const response = await axios.put(`${url}/${id}`, product);
        console.log("Producto Editado: Metodo PUT",response.data);
    } catch (error) {
        console.log(error);
    }
};
// elimina producto
const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${url}/${id}`);
        console.log("Producto Eliminado: Metodo DELETE",response.data);
    } catch (error) {
        console.log(error);
    }
};

