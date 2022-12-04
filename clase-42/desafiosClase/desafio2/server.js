import express, { json } from "express";

const numeros = [];

const app = express();
app.use(json());

app.post("/ingreso", (req, res) => {
  const { numero } = req.body;
  numeros.push(numero);
  res.send(`Número ${numero} almacenado`);
});

app.get("/egreso", (req, res) => {
  res.json({ numeros });
});

app.listen(8000);
