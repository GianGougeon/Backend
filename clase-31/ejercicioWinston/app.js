const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("./logger.js");

const app = express();

app.get("/sumar", (req, res) => {
  const { a, b } = req.query;
  if (!isNaN(a) && !isNaN(b)) {
    logger.info(`Parámetros recibidos: a=${a}, b=${b} correctos para la suma`);
    res.send(`La suma de ${a} y ${b} es ${parseInt(a) + parseInt(b)}`);
  } else {
    logger.error(
      `Parámetros recibidos: a=${a}, b=${b} incorrectos para la suma`
    );
    res.status(400).send("Parámetros incorrectos");
  }
});

app.get("*", (req, res) => {
  const { url, method } = req;
  logger.warn(`Ruta ${url} con método ${method} no implementada`);
  res.send(`Ruta ${url} con método ${method} no implementada`);
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  logger.info(`Servidor escuchando en el puerto ${PORT}`);
});
server.on("error", (error) => logger.error(`Error en servidor ${error}`));
