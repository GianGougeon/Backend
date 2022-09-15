const { Router } = require("express");
const logout = Router();

logout.get("/", (req, res) => {
    req.session.destroy((err) => {
        if (!err) res.render("logout", { layout: "index" });
        else res.send("Error");
    });
});

module.exports = logout;
    