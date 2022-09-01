import express, { json } from "express";
const app = express();
import routes from "./routes/index.js";
import db from "./db/index.js";
import "./models/index.js";

app.use(json());
app.use("/api", routes);

db.sync({ force: false })
  .then(function () {
    // Recién ahora estamos seguros que la conexión fue exitosa
    app.listen(3000, () =>
      console.log("Servidor escuchando en el puerto 3000")
    );
  })
  .catch(console.error);
