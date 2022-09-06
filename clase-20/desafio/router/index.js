import express from "express";
import { Router } from "express";

let router = express.Router();

//Importo los routers
import { products } from "./productRouter.js";
import { carts } from "./carritoRouter.js";
import { error } from "./errorRouter.js";

//middlewares
router.use("/api/productos", products);
router.use("/api/carrito", carts);
router.use("*", error);

//module.exports = router;
export { router };
