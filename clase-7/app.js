const express = require("express");
const app = express();

let frase = "Hola mundo cómo están";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/frase", (req, res) => {
  res.json({ frase });
});

app.get("/api/frase/:pos", (req, res) => {
  const posicion = req.params.pos;
  const palabras = frase.split(" ");
  res.json({ buscada: palabras[posicion - 1] });
});

app.get("/api/letras/:num", (req, res) => {
  const numero = req.params.num;
  if (isNaN(numero)) res.json({ error: "El parámetro no es un número" });
  if (numero < 1 || numero > frase.length)
    res.json({ error: "El parámetro está fuera de rango" });
  res.send(frase[req.params.num - 1]);
});

app.get("/api/palabras/:num", (req, res) => {
  console.log(req);
  const numero = req.params.num;
  const palabras = frase.split(" ");
  if (isNaN(numero)) res.json({ error: "El parámetro no es un número" });
  if (numero < 1 || numero > frase.length)
    res.json({ error: "El parámetro está fuera de rango" });
  res.send(palabras[numero - 1]);
});

app.post("/api/palabras", (req, res) => {
  const palabra = req.body.palabra;
  const palabras = frase.split(" ");
  const posicion = palabras.push(palabra);
  frase = palabras.join(" ");
  res.status(201).json({
    agregada: palabra,
    pos: posicion,
  });
});

app.put("/api/palabras/:pos", (req, res) => {
  const posicion = req.params.pos;
  const palabraRecibida = req.body.palabra;
  const palabras = frase.split(" ");
  const palabraAReemplazar = palabras[posicion];
  frase = frase.replace(palabraAReemplazar, palabraRecibida);
  res.json({
    actualizada: palabraRecibida,
    anterior: palabraAReemplazar,
  });
});

app.delete("/api/palabras/:pos", (req, res) => {
  const posicion = req.params.pos;
  const palabras = frase.split(" ");
  palabras.splice(posicion - 1, 1);
  frase = palabras.join(" ");
  res.sendStatus(204);
});

app.listen(8000, () => {
  console.log("Server in port 8000");
});
