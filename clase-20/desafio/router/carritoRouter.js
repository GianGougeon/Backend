import express from "express";
import { Router } from "express";

//router
const carts = Router();

//controller
import { carritosDao } from "../contenedores/daos/index.js";

carts.get("/", (req, res) => {
    carritosDao.getAll().then((data) => {
        res.status(200).send(data);
    });
});

carts.post("/", (req, res) => {
    carritosDao.save().then((data) => {
        res.status(201).send(data);
    });
});

carts.delete("/:id", (req, res) => {
    let id = req.params.id;
    carritosDao.deleteById(id).then((data) => {
        res.json(data);
    });
});

carts.get("/:id/productos", (req, res) => {
    let id = req.params.id;
    carritosDao.getById(id).then((data) => {
        res.status(201).send(data.products);
    });
});
carts.post("/:id/productos/:id_prod", (req, res) => {
    let id = req.params.id;
    let id_prod = req.params.id_prod;
    carritosDao.addProduct(id, id_prod).then((data) => {
        res.status(201).send(data);
    });
});

export { carts };
