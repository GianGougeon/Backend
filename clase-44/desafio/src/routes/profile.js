const express = require("express");
const auth = require("../middlewares/auth.js");
const User = require("../models/user.js");

const profile = express.Router();

const fs = require("fs");
const path = require("path");

// busca el avatar
const getAvatar = (name) => {
    const dir = path.join(__dirname, "../public/images");
    const files = fs.readdirSync(dir);
    const avatar = files.find((file) => file.includes(name));
    return `/images/${avatar}`;
};

profile.get("/", auth, (req, res) => {
    const user = {
        name: req.user.name,
        adress: req.user.adress,
        phone: req.user.phone,
        email: req.user.email,
        age: req.user.age,
        image: getAvatar(req.user.name),
    };
    res.render("profile", {
        user,
    });
});

module.exports = profile;
