import { Router } from "express";
import PersonaController from "../controllers/index.js";

const router = Router();

router.get("/persona/:id", PersonaController.getById);

export default router;
