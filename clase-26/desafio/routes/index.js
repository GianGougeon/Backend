import express from "express";
const router = express.Router();

//Routers
import { home } from "./home.js";
import { login } from "./login.js";
import { loginError } from "./login.js";
import { register } from "./register.js";
import { datos } from "./datos.js";
import { logout } from "./logout.js";

//Middlewares
router.use("/", home);
router.use("/login", login);
router.use("/loginError", loginError);
router.use("/register", register);
router.use("/datos", datos);
router.use("/logout", logout);

//module.exports = router;
export { router };
