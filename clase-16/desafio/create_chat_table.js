const { options } = require("./data/options/sqliteDB");
const knex = require("knex")(options);

knex.schema
    .createTable("chat", (table) => {
        table.increments("id");
        table.string("author");
        table.string("time");
        table.string("text");
    })
    .then(() => {
        console.log('Tabla "Chat" creada');
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });
