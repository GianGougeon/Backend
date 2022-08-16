const { options } = require("./options/sqliteDB");
const knex = require("knex")(options);

const cars = [
  { name: "Ferrari", price: 200000 },
  { name: "Bugatti", price: 1000000 },
  { name: "Porsche", price: 50000 },
];

knex("cars")
  .insert(cars)
  .then(() => {
    console.log("Cars inserted");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
