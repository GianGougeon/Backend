const express = require("express");
const { Router } = require("express");
const personas = Router();

const listaPersonas = [];

personas
  .route("/")
  .get((req, res) => {
    res.status(200).json(listaPersonas);
  })
  .post((req, res) => {
    if (req.body.persona) {
      listaPersonas.push(req.body.persona);
      res.status(201).json({ Agregada: req.body.persona });
    }
    if (!req.body.persona) {
      const newPersona = {
        Nombre: req.body.nombrePersona,
        Apellido: req.body.apellido,
        Edad: req.body.edadPersona,
      };
      listaPersonas.push(newPersona);
      res.status(201).json({ Agregada: newPersona });
    }
  });

// personas.get("/", (req, res) => {
//   res.status(200).json(listaPersonas);
// });

// personas.post("/", (req, res) => {
//   if (req.body.persona) {
//     listaPersonas.push(req.body.persona);
//     res.status(201).json({ Agregada: req.body.persona });
//   }
//   if (!req.body.persona) {
//     const newPersona = {
//       Nombre: req.body.nombrePersona,
//       Apellido: req.body.apellido,
//       Edad: req.body.edadPersona,
//     };
//     listaPersonas.push(newPersona);
//     res.status(201).json({ Agregada: newPersona });
//   }
// });

module.exports = personas;
