import express, { urlencoded } from "express";
import router from "./rutas/index.js";

const app = express();

app.use(urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", router);

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
