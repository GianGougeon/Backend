const express = require("express");
const router = express.Router();
const tweetsRouter = require("./tweets");

router.use("/tweets", tweetsRouter);

module.exports = router;
