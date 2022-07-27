const express = require("express");
const { Router } = require("express");
const mascotas = Router();

const listaMascotas = [];

mascotas.get("/", (req, res) => {
  res.status(200).json(listaMascotas);
});

mascotas.post("/", (req, res) => {
  if (req.body.mascota) {
    listaMascotas.push(req.body.mascota);
    res.status(201).json({ Agregada: req.body.mascota });
  }

  if (!req.body.mascota) {
    const newMascota = {
      Nombre: req.body.nombreMascota,
      Raza: req.body.raza,
      Edad: req.body.edadMascota,
    };
    listaMascotas.push(newMascota);
    res.status(201).json({ Agregada: newMascota });
  }
});

module.exports = mascotas;
