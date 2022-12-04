const express = require("express");
const router = express.Router();
//Routers
/*============================[Middlewares]============================*/
const { login, loginError, register, logout, userId } = require("./auth.js");
const { carts, order } = require("./api/cart_api.js");
const {home, homepage} = require("./home.js");
//
router.use("/", home);
router.use("/homepage", homepage);
router.use("/admin", require("./admin.js"));
//
router.use("/login", login);
router.use("/loginError", loginError);
router.use("/register", register);
router.use("/logout", logout);
router.use("/datos", require("./datos.js"));
router.use("/carrito", require("./cart.js"));
router.use("/profile", require("./profile.js"));
router.use("/productos", require("./productos.js"));

/*============================[Api routes]============================*/

router.use("/api/productos", require("./api/productos_api.js"));
router.use("/api/carrito", carts);
router.use("/api/user", userId);
router.use("/api/order", order);

/*============================[Error router]============================*/

router.use("/*", require("./error.js"));

// export
module.exports = router;
