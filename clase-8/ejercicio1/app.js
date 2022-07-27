const express = require("express");

const app = express();
const personas = require("./routes/personasRouter");
const mascotas = require("./routes/mascotasRouter");
let PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando el puerto: ${server.address().port}`);
});

server.on("error", (error) => `El servidor a tenido un error:${error}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/personas", personas);
app.use("/mascotas", mascotas);
