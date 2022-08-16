//express
const express = require("express");
const app = express();

//routers
const router = require("./routes");

//middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use("/", router);

//server
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log(`Servidor escuchando el puerto: ${server.address().port}`);
});

server.on("error", (error) => `El servidor error:${error}`);