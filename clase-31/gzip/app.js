const express = require("express");
const compression = require("compression");
const app = express();

app.use(compression());

let str = "";

app.get("/saludo", (req, res) => {
  for (let i = 0; i < 1000; i++) {
    str += "Hola que tal";
  }
  res.send(str);
});

app.listen(3000);
