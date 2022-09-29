const express = require("express");
const auth = require("./../middlewares/auth.js");

const info = express.Router();

const data = {
    arguments: process.argv,
    memory: process.memoryUsage(),
    platform: process.platform,
    nodeV: process.version,
    execPath: process.execPath,
    processId: process.pid,
    carpet: process.cwd(),
};
info.get("/", auth,  (req, res) => {
    res.render("info", {
        datos: data,
    });
});

module.exports = info;