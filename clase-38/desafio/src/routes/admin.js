const express = require("express");
const auth = require("./../middlewares/auth.js");

const admin = express.Router();

admin.get("/", auth, async (req, res) => {
    res.render("admin");
});

module.exports = admin;
