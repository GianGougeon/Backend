import { getPersona } from "../services/index.js";

class PersonaController {
    static async getById(req, res) {
        const persona = await getPersona({ id: req.params.id });
        res.send(persona);
    }
}

export default PersonaController;
