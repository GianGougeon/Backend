import express from "express";
import { fork } from "child_process";
const randoms = express.Router();

randoms.get("/", function (req, res) {
    const child = fork("./utils/random.js");
    console.log(child);
    // const cant = req.query.cant;
    // if (isNaN(cant)) {
    //     let num = 100000000;
    //     child.send(["start", num]);
    //     child.on("message", (numerosRandom) => {
    //         res.send(numerosRandom);
    //     });
    // } else {
    //     child.send(["start", cant]);
    //     child.on("message", (numerosRandom) => {
    //         res.send(numerosRandom);
    //     });
    // }
});

export { randoms };
