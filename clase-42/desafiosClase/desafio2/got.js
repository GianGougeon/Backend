import got from "got";

const url = "http://localhost:8000/egreso";

const obtenerNumeros = () => {
  got(url, { responseType: "json" })
    .then((res) => {
      console.log(res.body);
    })
    .catch((err) => {
      console.log(err);
    });
};

setInterval(obtenerNumeros, 10000);
obtenerNumeros();
