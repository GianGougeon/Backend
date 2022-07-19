const express = require("express");
const {
    Router
} = express;
const router = Router();
const ProductosController = require("../controller/controller");

// retorna todos los ProductosController
router.get("/", (req, res) => {
    res.json(ProductosController.getAll());
});

// retorna un producto
router.get("/:id", (req, res) => {
    const {
        id
    } = req.params;
    res.send(ProductosController.getOne(id));
});

// agrega un producto
router.post("/", (req, res) => {
    res.send(ProductosController.add(req.body));
});

// actualiza un producto
router.put("/:id", (req, res) => {
    const {
        id
    } = req.params;
    res.send(ProductosController.update(id, req.body));
});

// elimina un producto
router.delete("/:id", (req, res) => {
    res.send(ProductosController.delete(req.params.id));
})

module.exports = router;