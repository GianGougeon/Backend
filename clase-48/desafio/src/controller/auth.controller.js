const dataBase = require("../db/register");
class Auth {
    // funcion que devuelve todos los usuarios
    static getUsuarios() {
        return dataBase.getUsuarios();
    }
    // funcion para registrar un usuario
    static registerUsuario(obj) {
        return dataBase.save(obj);
    }
}
module.exports = Auth;
