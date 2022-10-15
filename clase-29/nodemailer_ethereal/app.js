import { createTransport } from "nodemailer";

const EMAIL = "diego.jofre@bue.edu.ar";
const TEST_MAIL = "delphia18@ethereal.email";
const PASS_MAIL = "kijfnxfuonlnjoyu";

const transporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: EMAIL,
    pass: PASS_MAIL,
  },
});

const emailContent = {
  from: "Mi primer app con Nodemailer",
  to: `Querido desarrollador <${EMAIL}>, <${TEST_MAIL}>`,
  subject: "Prueba Hola Mundo con Nodemailer",
  text: "Hello coders",
  html: "<h1 style='color: blue'>Contenido de prueba desde <span style='color: red'>Node.js on Nodemailer</span><img src='cid:unique@kreata.ee'></h1>",
  attachments: [
    {
      filename: "gatito.png",
      path: "gatito.png",
      cid: "unique@kreata.ee",
    },
  ],
};

try {
  const info = await transporter.sendMail(emailContent);
  console.log(info);
} catch (err) {
  console.log(err);
}
