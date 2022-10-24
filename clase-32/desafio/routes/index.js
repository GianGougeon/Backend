const express = require("express");
const router = express.Router();
//Routers
const home = require("./home.js");
const { login, loginError, register, logout } = require("./auth.js");
const listaProductos = require("./listaProductos.js");
const datos = require("./datos.js");
const info = require("./info.js");
const error = require("./error.js");

//Middlewares
router.use("/", home);
router.use("/login", login);
router.use("/loginError", loginError);
router.use("/register", register);
router.use("/logout", logout);
router.use("/productos", listaProductos);
router.use("/datos", datos);
router.use("/info", info);

// Error router
router.use("/*", error);

// export
module.exports = router;
