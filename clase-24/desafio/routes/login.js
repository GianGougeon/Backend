const { Router } = require("express");
const login = Router();
// controller
const Login = require("./../controller/login.controller");

login.get("/", (req, res) => {
    const usuarios = Login.getUsuarios();
    if (!usuarios) {
        res.redirect("/datos");
    } else {
        res.render("loginForm", { layout: "index" });
    }
});
login.post("/", (req, res) => {
    const { username, password } = req.body;
    const existeUsuario = Login.findUsuario(username, password);
    if (!existeUsuario) {
        res.render("loginError", { layout: "index" });
    } else {
        req.session.username = username;
        res.redirect("/datos");
    }
});

login.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (!err) res.send("Logout Ok!");
        else res.send("Error");
    });
});

module.exports = login;
