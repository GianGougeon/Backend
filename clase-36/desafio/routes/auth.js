const express = require("express");
const passport = require("passport");
/*============================[Routes]============================*/

const login = express.Router();
const loginError = express.Router();
const register = express.Router();
const logout = express.Router();
const userId = express.Router();

/*============================[]============================*/

const multer = require("multer");
const { sendMailNewUser } = require("../middlewares/nodemailer");
const logger = require("../middlewares/logger");
const Auth = require("../controller/auth.controller");
const auth = require("./../middlewares/auth.js");

/*============================[Multer]============================*/

// colocar nombre de archivo segun el nombre del usuario, avatar+nombre
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images");
    },
    filename: function (req, file, cb) {
        cb(null, `avatar-${req.body.name}.${file.mimetype.split("/")[1]}`);
    },
});

const upload = multer({ storage });


/*============================[Login]============================*/

login.get("/", (req, res) => {
    const usuarios = Auth.getUsuarios();
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

    Auth.registerUsuario({
        name,
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
