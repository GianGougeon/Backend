import { Router } from "../../deps.ts";
import {
  findAll,
  findProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../handlers/productos.handler.ts";

export const router = new Router()
  .get("/api/productos", findAll)
  .get("/api/productos/:id", findProduct)
  .post("/api/productos", createProduct)
  .put("/api/productos/:id", updateProduct)
  .delete("/api/productos/:id", deleteProduct);
