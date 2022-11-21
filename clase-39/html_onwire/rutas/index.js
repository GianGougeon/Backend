import { Router } from "express";
const router = Router();
import RegistroController from "../controladores/index.js";

// middleware that is specific to this router
router.get("/html-onwire", RegistroController.renderRegistro);

router.post("/html-onwire", RegistroController.guardarUsuario);

export default router;
