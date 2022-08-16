import { Perimetro } from "./perimetro";
import { Superficie } from "./superficie";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app
  .get("/cuadrado", (req, res) => {
    const lado: number = req.body.lado;
    const perimetro: number = new Perimetro().cuadrado(lado);
    const superficie: number = new Superficie().supCuadrado(lado);
    res.send({ perimetro, superficie });
  })
  .get("/rectangulo", (req, res) => {
    const base: number = req.body.base;
    const altura: number = req.body.altura;
    const perimetro: number = new Perimetro().rectangulo(base, altura);
    const superficie: number = new Superficie().supRectangulo(base, altura);
    res.send({ perimetro, superficie });
  })
  .get("/circulo", (req, res) => {
    const radio: number = req.body.radio;
    const perimetro: number = new Perimetro().circulo(radio);
    const superficie: number = new Superficie().supCirculo(radio);
    res.send({ perimetro, superficie });
  });

app.listen(port, () => console.log(`Server running on port ${port}`));
