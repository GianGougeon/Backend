const { Router } = require("express");
const datos = Router();

datos.get("/", (req, res) => {
    if (req.session.username) {
        res.render("datos", { layout: "index"});
    } else {
        res.redirect("/login");
    }
});

module.exports = datos;
