import Sequelize from "sequelize";

const db = new Sequelize("exampledb", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default db;
