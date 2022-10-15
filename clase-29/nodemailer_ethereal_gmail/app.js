import { createTransport } from "nodemailer";

const TEST_MAIL = "delphia18@ethereal.email";
const PASS_MAIL = "CAHsnxSDhhttRRasPz@ethereal.email";

const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: "CAHsnxSDhhttRRasPz",
  },
});

const emailContent = {
  from: "Mi primer app con Nodemailer",
  to: `Querido desarrollador <${TEST_MAIL}>`,
  subject: "Prueba Hola Mundo con Nodemailer",
  text: "Hello coders",
  html: "<h1 style='color: blue'>Contenido de prueba desde <span style='color: red'>Node.js on Nodemailer</span><img src='cid:unique@kreata.ee'></h1>",
  attachments: [
    {
      filename: "gatito.png",
      path: "gatito.png",
      cid: "unique@kreata.ee",
    },
    {
      path: "gatito.png",
    },
  ],
};

try {
  const info = await transporter.sendMail(emailContent);
  console.log(info);
} catch (err) {
  console.log(err);
}
