import axios from "axios";

const url = "http://localhost:8000/ingreso";

const enviarNumeros = () => {
  axios
    .post(url, { numero: Math.random() })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

setInterval(enviarNumeros, 2000);
enviarNumeros();
