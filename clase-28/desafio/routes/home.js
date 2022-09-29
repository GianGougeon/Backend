import express from "express";
import { auth } from "./../middlewares/auth.js";
import User from "./../models/User.js";

const home = express.Router();

home.get("/", auth, async (req, res) => {
    const datosUsuario = await User.findById(req.user._id).lean();
    if (datosUsuario) {
        res.redirect("/datos");
    } else {
        res.redirect("/login");
    }
});

export { home };
