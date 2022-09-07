const { options } = require("./options/sqliteDB.js");
const knex = require("knex")(options);

//Mostrar mensajes
const getMessages = async () => {
    try {
        const messages = await knex("chat").select("*");
        return messages;
    } catch (err) {
        throw new Error("No se pudo leer base de datos(list)", err);
    }
};

//Guardar mensaje
const saveMessages = async (message) => {
    try {
        await knex("chat")
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
