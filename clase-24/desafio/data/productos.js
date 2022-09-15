const { options } = require("./options/mariaDB");
const knex = require("knex")(options);

//funcion para mostrar todos los productos
const listOfproduct = async () => {
    try {
        const productos = await knex
            .from("productos")
            .select("*")
            .orderBy("precio", "desc");
        return productos;
    } catch (err) {
        throw new Error("No se pudo leer base de datos( listOfproduct )", err);
    }
};

//funcion para guardar un producto
const addProduct = async (product) => {
    try {
        knex("productos")
            .insert(product)
            .then(() => {
                return "Producto agregado";
            })
            .catch((err) => {
                throw new Error(
                    "No se pudo leer base de datos ( addProduct - insert )",
                    err
                );
            });
    } catch (err) {
        throw new Error("No se pudo leer base de datos ( addProduct )", err);
    }
};

// exporta las funciones
module.exports = {
    listOfproduct,
    addProduct,
};
