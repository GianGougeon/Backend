import express from "express";
import { Router } from "express";
import { admin } from "../controllers/admin.controller.js";

const products = Router();

//controllers
import { productosDao } from "../contenedores/daos/index.js";

//estructura
products.get("/", (req, res) => {
    productosDao.getAll().then((data) => {
        res.status(200).send(data);
    });
});

products.get("/:id", (req, res) => {
    let id = req.params.id;
    productosDao.getById(id).then((data) => {
        res.status(201).json(data);
    });
});

products.post("/", (req, res) => {
    let login = admin();
    if (login) {
        const { name, description, code, thumbnail, price, stock } = req.body;
        productosDao
            .save({ name, description, code, thumbnail, price, stock })
            .then((data) => {
                res.status(201).json(data);
            });
    } else {
        res.json({
            error: -1,
            descripcion: "ruta '/' método 'POST' no autorizada",
        });
    }
});

products.delete("/:id", (req, res) => {
    let login = admin();
    if (login) {
        let id = req.params.id;
        productosDao.deleteById(id).then((data) => {
            res.json(data);
        });
    } else {
        res.json({
            error: -1,
            descripcion: `ruta '/${id}' método 'DELETE' no autorizada`,
        });
    }
});

products.put("/:id", (req, res) => {
    let login = admin();
    if (login) {
        let id = req.params.id;
        const { name, description, code, thumbnail, price, stock } = req.body;
        productosDao
            .changeById(id, {
                name,
                description,
                code,
                thumbnail,
                price,
                stock,
            })
            .then((data) => {
                res.json(data);
            });
    } else {
        res.json({
            error: -1,
            descripcion: `ruta '/${id}' método 'PUT' no autorizada`,
        });
    }
});

export { products };
