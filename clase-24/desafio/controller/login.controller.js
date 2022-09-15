const usuariosDB = require("./../data/usuarioDB");
class Login {
    static getUsuarios() {
        return usuariosDB.getUsuarios();
    }
    static findUsuario(username, password) {
        return usuariosDB.findUsuario(username, password);
    }
    static registerUsuario(username, password) {
        return usuariosDB.register(username, password);
    }
}

module.exports = Login;
