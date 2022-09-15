const express = require("express");
const router = express.Router();

const home = require("./home");
const login = require("./login");
const register = require("./register");
const logout = require("./logout");
const datos = require("./datos");
const productos = require("./productos");

//middlewares
router.use("/", home);
router.use("/login", login);
router.use("/register", register);
router.use("/logout", logout);
router.use("/datos", datos);
router.use("/productos", productos);

module.exports = router;
