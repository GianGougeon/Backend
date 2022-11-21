import express from "express";
const router = express.Router();

import NoticiasController from "../controllers/noticias.controller.js";

class RouterNoticias {
  constructor() {
    this.controlador = new NoticiasController();
  }

  start() {
    router.get("/", this.controlador.obtenerNoticias);

    router.post("/", this.controlador.guardarNoticia);

    router.put("/:id", this.controlador.actualizarNoticia);

    router.delete("/:id", this.controlador.borrarNoticia);

    return router;
  }
}

export default RouterNoticias;
