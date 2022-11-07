const { createTransport } = require("nodemailer");
const logger = require("./logger");

const dotenv = require("dotenv");

dotenv.config();

const EMAIL = process.env.EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS;
// puertos para enviar el email:
// 465
// 587
const transporter = createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: EMAIL,
        pass: EMAIL_PASS,
    },
});

const emailContentNewUser = (userName) => {
    return {
        from: "APP",
        to: `Admin <${EMAIL}>`,
        subject: `Nuevo registro: ${userName}`,
        text: `Nuevo usuario registrado: ${userName}, el dia ${new Date()}`,
    };
};
const emailContentNewOrder = (name, prod) => {
    const prodList = prod.map((p) => {
        return `
        <li>
            <p>Nombre: ${p.nombre}</p>
            <p>Precio: ${p.precio}</p>
        </li>
        `;
    });
    return {
        from: "APP",
        to: `Admin <${EMAIL}>`,
        subject: `Nuevo pedido de: ${name}`,
        text: `Nuevo usuario Pedido: ${name}, el dia ${new Date()}`,
        html: `<ul>${prodList}</ul><p>El total es: ${prod.reduce((acc, p) => acc + p.precio, 0)}</p>`,
    };
};
// funcion para enviar el email
const sendMailNewUser = (name) => {
    try {
        transporter.sendMail(emailContentNewUser(name));
        logger.info(`Email enviado, nuevo usuario: ${name}`);
    } catch (err) {
        console.log("Email no enviado");
        logger.warn(`Error al enviar el mail ${err}`);
    }
};
const sendMailNewOrder = (name, prod) => {
    try {
        transporter.sendMail(emailContentNewOrder(name, prod));
        logger.info(`Email enviado, nuevo usuario: ${name}`);
    } catch (err) {
        console.log("Email no enviado");
        logger.warn(`Error al enviar el mail ${err}`);
    }
};
module.exports = {
    sendMailNewUser,
    sendMailNewOrder,
};