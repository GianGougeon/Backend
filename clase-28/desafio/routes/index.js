import express from "express";
const router = express.Router();

//Routers
import { home } from "./home.js";
import { login, loginError, register, logout } from "./auth.js";
import { datos } from "./datos.js";
import { info } from "./info.js";
import { randoms } from "./randoms.js";

//Middlewares
router.use("/", home);
router.use("/login", login);
router.use("/loginError", loginError);
router.use("/register", register);
router.use("/logout", logout);
router.use("/datos", datos);
router.use("/info", info);
router.use("/api/randoms", randoms);

export { router };
