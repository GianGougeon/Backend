const { Router } = require("express");
const register = Router();
// controller
const Login = require("./../controller/login.controller");

register.get("/", (req, res) => {
    res.render("registerForm", { layout: "index" });
});

register.post("/", (req, res) => {
    const { username, password } = req.body;
    const newUsuario = Login.registerUsuario(username, password);
    if (newUsuario) {
        res.render("registerError", { layout: "index" });
    } else {
        res.redirect("/login");
    }
});

module.exports = register;
