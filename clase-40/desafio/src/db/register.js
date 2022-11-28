require("./config.js");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const logger = require("../utils/logger");

// funcion que crea un usuario y lo guarda en la base de datos
const save = async (user) => {
    const newUser = new User(user);
    try {
        const userExist = await User.findOne({ email: user.email });
        if (userExist) {
            return false;
        } else {
            const hashPass = await bcrypt.hash(newUser.password, 8);
            newUser.password = hashPass;
            logger.info("Nuevo usuario creado");
            await newUser.save();
            return newUser;
        }
    } catch (error) {
        console.log(error);
        logger.error("Error al crear el usuario");
    }
};
// funcion que devuelve un usuario
const getUsuarios = async () => {
    try {
        const usuarios = await User.find();
        return usuarios;
    } catch (error) {
        console.log(error);
        logger.error("Error al obtener los usuarios");
    }
};
   
module.exports = { save, getUsuarios };
