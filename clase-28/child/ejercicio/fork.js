const express = require("express");
const { fork } = require("child_process");

const app = express();

let visitas = 0;

app.get("/", function (req, res) {
  visitas++;
  res.json({ visitas });
});

app.get("/calculo-bloq", function (req, res) {
  const suma = sumar();
  res.send(`La suma es ${suma}`);
});

app.get("/calculo-nobloq", function (req, res) {
  const child = fork("./sumar.js");
  child.send("start");
  child.on("message", (suma) => {
    res.send(`La suma es ${suma}`);
  });
});

function sumar() {
  let suma = 0;
  for (let i = 0; i < 5e9; i++) {
    suma += i;
  }
  return suma;
}

app.listen(3000, () => {
  console.log("Server up!");
});
