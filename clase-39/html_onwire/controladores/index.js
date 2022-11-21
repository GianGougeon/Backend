import { obtenerRegistros, crearRegistro } from "../servicios/index.js";

const RegistroController = {
  renderRegistro: (req, res) => {
    const personas = obtenerRegistros();
    res.render("inicio", { personas });
  },

  guardarUsuario: (req, res) => {
    crearRegistro(req.body);
    res.redirect("/html-onwire");
  },
};

export default RegistroController;
