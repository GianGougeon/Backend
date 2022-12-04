import axios from "axios";

let options = {
  url: "https://pokeapi.co/api/v2/pokemon/pikachu",
  method: "GET",
};

// axios(options)
//   .then((response) => {
//     // Obtenemos los datos
//     let docs = response.data;
//     console.log(docs);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

let res = await axios.get(options.url, {});
console.log(res.data);
