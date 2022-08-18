const { options } = require("./options/sqliteDB");
const knex = require("knex")(options);

knex
  .from("cars")
  .where({ name: "Ferrari" })
  .update({ price: 5000 })
  .then(() => {
    console.log("Car/s updated");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
