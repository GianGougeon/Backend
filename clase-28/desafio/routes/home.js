const express = require("express");
const auth = require("./../middlewares/auth.js");
const User = require("./../models/User.js");

const home = express.Router();

home.get("/", auth, async (req, res) => {
    const datosUsuario = await User.findById(req.user._id).lean();
    if (datosUsuario) {
        res.redirect("/datos");
    } else {
        res.redirect("/login");
    }
});

module.exports = home;
