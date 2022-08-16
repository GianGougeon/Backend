const express = require("express");
const {
  Router
} = require("express");
const error = Router();

error.get("*", (req, res) => {
  res.json({
    error: -2,
    descripcion: `ruta inexistente`
  })
});

error.post("*", (req, res) => {
  res.json({
    error: -2,
    descripcion: `ruta inexistente`
  })
});

error.delete("*", (req, res) => {
  res.json({
    error: -2,
    descripcion: `ruta inexistente`
  })
});

error.put("*", (req, res) => {
  res.json({
    error: -2,
    descripcion: `ruta inexistente`
  })
});

module.exports = error;