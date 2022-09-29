const express = require("express");
const { fork } = require("child_process");
const randoms = express.Router();

randoms.get("/", function (req, res) {
    const child = fork("./utils/random.js");
    console.log(child);
    const cant = req.query.cant;
    if (isNaN(cant)) {
        let cant = 100000000;
        child.send(["start", cant]);
        child.on("message", (numerosRandom) => {
            res.send(numerosRandom);
        });
    } else {
        child.send(["start", cant]);
        child.on("message", (numerosRandom) => {
            res.send(numerosRandom);
        });
    }
});

module.exports = randoms;
