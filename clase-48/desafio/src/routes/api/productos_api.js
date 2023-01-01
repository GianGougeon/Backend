const { Router } = require("express");
const listaProductos = Router();
const ProductosController = require("../../controller/prod.controller");
const auth = require("../../middlewares/auth");

const logger = require("../../utils/logger");

listaProductos.get("/", auth, (req, res) => {
    try {
        ProductosController.getAll().then((data) => {
            res.status(200).send(data);
        });
        logger.info(`LLamada a todos los productos`);
    } catch (err) {
        logger.warn("Error al obtener todos los productos", err);
        res.status(404).send("Error al obtener todos los productos");
    }
});

listaProductos.get("/:id", async (req, res) => {
    // verifico que el producto exista antes de editar
    const producto = await ProductosController.getOne(req.params.id);
    if (producto) {
        logger.info(`LLamada a producto con id: ${req.params.id}`);
        res.status(200).send(producto);
    } else {
        logger.warn(`Producto no encontrado con id: ${req.params.id}`);
        res.status(404).send(`Producto no encontrado con id: ${req.params.id}`);
    }
});

listaProductos.post("/", auth, (req, res) => {
    // verifico que el producto recibido sea valido
    if (req.body.nombre && req.body.precio) {
        try {
            ProductosController.add(req.body);
            logger.info(`Producto agregado`);
            res.status(201).send("Producto agregado");
        } catch (err) {
            logger.warn("Error al agregar el producto", err);
            res.status(404).send("Error al agregar el producto");
        }
    } else {
        logger.warn("Error al agregar el producto, datos incompletos");
        res.status(404).send("Error al agregar el producto, datos incompletos");
    }
});

listaProductos.put("/:id", auth, async (req, res) => {
    // verifico que el producto exista antes de editar
    const producto = await ProductosController.getOne(req.params.id);
    if (producto) {
        ProductosController.update(req.params.id, req.body);
        logger.info(`Producto con id: ${req.params.id} actualizado`);
        res.status(201).send(`Producto con id: ${req.params.id} actualizado`);
    } else {
        logger.warn(`Producto no encontrado con id: ${req.params.id}`);
        res.status(404).send(`Producto no encontrado con id: ${req.params.id}`);
    }
});

listaProductos.delete("/:id", auth, async (req, res) => {
    // verifico que el producto exista antes de eliminarlo
    const producto = await ProductosController.getOne(req.params.id);
    if (producto) {
        try {
            const id = req.params.id;
            logger.info(`Producto con id: ${id} eliminado`);
            res.status(201).send(`Producto con id: ${id} eliminado`);
            return ProductosController.delete(id);
        } catch (err) {
            logger.warn(`Error al eliminar el producto`, err);
            res.status(404).send("Error al eliminar el producto");
        }
    } else {
        logger.warn(`Producto no encontrado con id: ${req.params.id}`);
        res.status(404).send(`Producto no encontrado con id: ${req.params.id}`);
    }
});

module.exports = listaProductos;
