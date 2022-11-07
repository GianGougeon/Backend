import express, { json } from "express";

const app = express();

const PORT = 3000;

app.use(json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/saludar", (req, res) => {
    const { nombre } = req.body;
    console.log(`nombre: ${nombre}`);
    res.send(`Hola ${nombre}`);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
