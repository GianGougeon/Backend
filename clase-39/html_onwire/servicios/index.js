import { recuperar, guardar } from "../persistencia/index.js";

function obtenerRegistros() {
  return recuperar();
}

function crearRegistro(dato) {
  guardar(dato);
  return dato;
}

export { obtenerRegistros, crearRegistro };
