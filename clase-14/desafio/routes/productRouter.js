const express = require("express");
const { Router } = require("express");
const products = Router();

/* 
{
  "name":"motor",
  "description":"motor 125cc",
  "code": "R-123",
  "thumbnail":"https://http2.mlstatic.com/D_NQ_NP_843234-MLU47565558388_092021-O.webp",
  "price":18000,
  "stock":2
}
 */
//importo los controllers
const Products = require("../controllers/products.controller");
const login = require("../controllers/admin.controller");
const admin = require("../controllers/admin.controller");

//estructura Productos

// funcion que devuelve todos los productos
products.get("/", async (req, res) => {
    try {
        const productos = await Products.getAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json(error);
    }
});

products.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const producto = await Products.getItem(id);
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json(error);
    }
});

products.post("/", async (req, res) => {
    try {
        if (login) {
            const producto = await Products.save(req.body);
            res.status(201).json(producto);
        } else {
            res.status(401).json({
                error: -1,
                descripcion: "ruta '/' método 'POST' no autorizada",
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

products.put("/:id", async (req, res) => {
    try {
        if (login) {
            let id = req.params.id;
            const data = await Products.modifyItem(id, req.body);
            res.status(200).json(data);
        } else {
            res.status(401).json({
                error: -1,
                descripcion: "ruta '/' método 'PUT' no autorizada",
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
module.exports = products;
