const dataBase = require("../db/register");
class Auth {
    static getUsuarios() {
        return dataBase.getUsuarios();
    }
    static registerUsuario(object) {
        return dataBase.save(object);
    }
}
module.exports = Auth;
