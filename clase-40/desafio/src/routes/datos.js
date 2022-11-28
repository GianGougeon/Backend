const express = require("express");
const auth = require("./../middlewares/auth.js");
const User = require("../models/user.model.js");

const datos = express.Router();

datos.get("/", auth, async (req, res) => {
    const datosUsuario = await User.findById(req.user._id).lean();
    const name = datosUsuario.email.slice(0, datosUsuario.email.indexOf("@"));

    res.render("datos", {
        nombre: name,
    });
});

module.exports = datos;
