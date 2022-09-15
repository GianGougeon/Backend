const { Router } = require("express");
const home = Router();

home.get("/", (req, res) => {
    if (req.session.user) {
        res.redirect("/datos");
    } else {
        res.redirect("/login");
    }
});

module.exports = home;

// res.render("home", { layout: "index" });
