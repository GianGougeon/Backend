const express = require("express");
const randoms = express.Router();

const numCPUs = require("os").cpus().length;
const PORT = parseInt(process.argv[2]) || 8081;

const numRandom = () => {
    //genera un numero random
    return Math.round(Math.random() * 99999999);
};

randoms.get("/", function (req, res) {
  console.log(`port: ${PORT} -> Fyh: ${Date.now()}`);
  const randomNum = numRandom();
  const info = {
    puerto: PORT,
    num_random: randomNum,
    procesadores: numCPUs,
  }
  res.send(info);  
});

module.exports = randoms;