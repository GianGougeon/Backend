const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("./logger.js");

const app = express();

app.get("/sumar", (req, res) => {
  const { a, b } = req.query;
  if (!isNaN(a) && !isNaN(b)) {
    logger.info(`Parámetros ${a} y ${b} correctos para la suma`, a);
    res.send(`La suma de ${a} más ${b} es ${parseInt(a) + parseInt(b)}`);
  } else {
    logger.error("Parámetros incorrectos para la suma");
    res.send("Parámetros de entrada no válidos");
  }
});

app.get("*", (req, res) => {
  let { url, method } = req;
  logger.warn("Ruta %s %s no implementada", url, method);
  res.send(`Ruta ${method} ${url} no está implementada`);
});

const PORT = parseInt(process.argv[2]) || 8080;

const server = app.listen(PORT, () => {
  logger.info("Servidor express escuchando en el puerto %s", PORT);
});
server.on("error", (error) => logger.error("Error en servidor: %s", error));
