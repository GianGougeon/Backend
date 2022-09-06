import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("coderhouse"));
app.use(express.json());

app.get("/cookie", (req, res) => {
  res.send(req.signedCookies);
});

app.post("/cookie", (req, res) => {
  const { nombre, valor, tiempo } = req.body;
  console.log({ nombre, valor, tiempo });

  if (tiempo) {
    res.cookie(nombre, valor, { signed: true, maxAge: parseInt(tiempo) });
  } else {
    res.cookie(nombre, valor, { signed: true });
  }
  res.send("Ok");
});

app.get("/clr", (req, res) => {
  res.clearCookie("color").send("deleted");
});

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server on PORT ${PORT}`);
});
