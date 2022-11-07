const express = require("express");
const auth = require("./../middlewares/auth.js");
const user = require("../models/user.js");

const home = express.Router();
const homepage = express.Router();

home.get("/", auth, async (req, res) => {
    const datosUsuario = await user.findById(req.user._id).lean();
    if (datosUsuario) {
        res.redirect("/homepage");
    } else {
        res.redirect("/login");
    }
});

homepage.get("/", auth, async (req, res) => {
    res.render("homepage");
});
module.exports = { home, homepage };
