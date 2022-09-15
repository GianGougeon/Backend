const usuarios = [];
const getUsuarios = () => {
    return usuarios;
};
const findUsuario = (username, password) => {
    const usuario = usuarios.find(
        (usuario) => usuario.username === username && usuario.password === password
    );
    return usuario;
};
const addUsuario = (usuario) => {
    usuarios.push(usuario);
};
const register = (username, password) => {
    const usuario = {
        username,
        password,
    };
    addUsuario(usuario);
};

module.exports = {
    getUsuarios,
    findUsuario,
    register,
};
