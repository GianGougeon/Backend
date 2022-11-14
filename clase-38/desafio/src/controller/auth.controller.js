const dataBase = require("../db/register");
class Auth {
    // funcion que devuelve todos los usuarios
    static getUsuarios() {
        return dataBase.getUsuarios();
    }
    // funcion para registrar un usuario
    static registerUsuario(object) {
        return dataBase.save(object);
    }
}
module.exports = Auth;
