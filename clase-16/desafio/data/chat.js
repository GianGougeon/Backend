const { options } = require("./options/sqliteDB");
const knex = require("knex")(options);

//funcion para mostrar todos los mensajes
const getMessages = async () => {
    try {
        const mensajes = await knex("mensaje").select("*");
        console.log("mensajes", mensajes);
        return mensajes;
    } catch (err) {
        console.log("hola", err);
        throw new Error("No se pudo leer la base de datos(list)", err);
    }
};

//funcion para guardar un mensaje
const saveMessages = async (message) => {
    try {
        await knex("mensaje")
            .insert(message)
            .then(() => {
                return "Mensaje Enviado";
            })
            .catch((err) => {
                throw new Error("No se pudo leer (insert error)", err);
            });
    } catch (err) {
        console.log(err);
        throw new Error("No se pudo leer la base de datos save", err);
    }
};

module.exports = {
    getMessages,
    saveMessages,
};
