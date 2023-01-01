const express = require("express");
const passport = require("passport");
/*============================[Routes]============================*/

const login = express.Router();
const loginError = express.Router();
const register = express.Router();
const logout = express.Router();
const userId = express.Router();

/*========================================================*/
const { sendMailNewUser } = require("../utils/nodemailer");
const logger = require("../utils/logger");
const AuthController = require("../controller/auth.controller");
const auth = require("./../middlewares/auth.js");

/*============================[Multer]============================*/
const upload = require("./../middlewares/multer.js");
/*============================[Login]============================*/

login.get("/", (req, res) => {
    const usuarios = AuthController.getUsuarios();
    if (!usuarios) {
        res.redirect("/homepage");
    } else {
        res.render("login");
    }
});

// user id
userId.get("/", auth, (req, res) => {
    res.send(req.user._id);
});

login.post(
    "/",
    passport.authenticate("local", { failureRedirect: "loginError" }),
    (req, res) => {
        logger.info("Usuario logueado");
        res.redirect("/homepage");
    }
);

// Login Error

loginError.get("/", (req, res) => {
    res.render("loginError");
    logger.warn(`Error en el login de usuario ${req.originalUrl}`);
});

/*============================[Logout]============================*/

logout.get("/", (req, res) => {
    req.logout(function (err) {
        if (err) {
            logger.error(`Error al desloguear usuario ${req.originalUrl}`);
            return next(err);
        }
        logger.info("Usuario deslogueado");
        res.redirect("/");
    });
});

/*============================[register]============================*/

register.get("/", (req, res) => {
    res.render("register");
});

register.post("/", upload.single("file"), async (req, res) => {
    const { name, adress, age, phone, email, password } = req.body;
    const date = Date.now();
    AuthController.registerUsuario({
        name,
        date,
        adress,
        age,
        phone,
        email,
        password,
    }).then((user) => {
        if (user) {
            logger.info(`Nuevo usuario ${name} registrado`);
            sendMailNewUser(name);
            return res.render("login");
        } else {
            logger.warn(`Error en el registro de usuario ${req.originalUrl}`);
            res.render("registerError", {
                error: "El usuario ya existe",
            });
        }
    });
});

module.exports = { login, loginError, register, logout, userId };
