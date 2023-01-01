const express = require("express");
const auth = require("../middlewares/auth.js");

const profile = express.Router();

const fs = require("fs");
const path = require("path");

// busca el avatar
const getAvatar = (date) => {
    const dir = path.join(__dirname, "../public/images");
    const files = fs.readdirSync(dir);
    // si coincide 11 caracteres de la fecha con el nombre del archivo lo devuelve
    const avatar = files.find((file) => file.includes(date.slice(0, 11)));
    return `/images/${avatar}`;
};


profile.get("/", auth, (req, res) => {
    const user = {
        name: req.user.name,
        adress: req.user.adress,
        phone: req.user.phone,
        email: req.user.email,
        age: req.user.age,
        image: getAvatar(req.user.date),
    };
    res.render("profile", {
        user,
    });
});

module.exports = profile;
