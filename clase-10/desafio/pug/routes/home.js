const express = require("express");
const { Router } = require("express");
const homeRounter = Router();

homeRounter.get("/", (req, res) => {  
  res.render('form'); 
});

module.exports = homeRounter;