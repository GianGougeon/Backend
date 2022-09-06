import express from 'express';
import {Router} from 'express';

//router
const error = Router();

error.get("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

error.post("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

error.delete("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

error.put("*", (req, res) => {  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

export {error}
