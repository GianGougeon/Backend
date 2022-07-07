const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;">Bienvenido al servidor express!</h1>')
});

let cantVisitas = 0;
app.get('/visitas', (req, res) => {
    res.send(`<h1 style="color:red;">La cantidad de visitas es <br> ${++cantVisitas}</h1>`)
});

app.get('/fyh', (req, res) => {
    const date = new Date();
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const year = date.getFullYear();
    res.send(`<h1 style="color:red;">Fecha: ${dia}/${mes}/${year}</h1>`)
});
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
});
server.on("error", error => console.log(`Error en servidor ${error}`));