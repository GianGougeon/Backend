import express from "express";
import { auth } from "./../middlewares/auth.js";
import User from "./../models/User.js";

const datos = express.Router();

datos.get("/", auth, async (req, res) => {
    const datosUsuario = await User.findById(req.user._id).lean();
    const name = datosUsuario.email.slice(0, datosUsuario.email.indexOf('@'));
    res.render("datos", {
        nombre: name,
    });
});

export { datos };
