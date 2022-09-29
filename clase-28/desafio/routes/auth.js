const express = require("express");
const passport = require("passport");

const login = express.Router();
const loginError = express.Router();
const register = express.Router();
const logout = express.Router();

const Auth = require("../controller/auth.controller");

/*============================[Login]============================*/

login.get("/", (req, res) => {
    const usuarios = Auth.getUsuarios();
    if (!usuarios) {
        res.redirect("/datos");
    } else {
        res.render("login");
    }
});

login.post(
    "/",
    passport.authenticate("local", { failureRedirect: "loginError" }),
    (req, res) => {
        res.redirect("/datos");
    }
);

// Login Error

loginError.get("/", (req, res) => {
    res.render("loginError");
});

/*============================[Logout]============================*/

logout.get("/", (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});

/*============================[register]============================*/
register.get("/", (req, res) => {
    res.render("register");
});

register.post("/", (req, res) => {
    const { password, email } = req.body;
    Auth.registerUsuario({ password, email }).then((user) => {
        if (user) {
            return res.render("login");
        } else {
            res.render("registerError", {
                error: "El usuario ya existe",
            });
        }
    });
});

module.exports = { login, loginError, register, logout };
