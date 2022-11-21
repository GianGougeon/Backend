const personas = [];

function recuperar() {
  return personas;
}

function guardar(dato) {
  personas.push(dato);
  return dato;
}

export { recuperar, guardar };
