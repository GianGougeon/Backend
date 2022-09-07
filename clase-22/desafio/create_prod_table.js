const { options } = require("./data/options/mariaDB");
const knex = require("knex")(options);

knex.schema
    .createTable("productos", (table) => {
        table.increments("id");
        table.string("nombre");
        table.integer("precio");
        table.string("url");
    })
    .then(() => {
        console.log('Tabla "Productos" creada');
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });
