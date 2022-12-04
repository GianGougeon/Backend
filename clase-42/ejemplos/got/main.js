import got from 'got';

let url = 'https://pokeapi.co/api/v2/pokemon/pikachu'

got(url, { responseType: 'json' })
  .then(response => {
    // Obtenemos los datos
    let res = response.body
    console.log(res);
  })
  .catch(error => {
    console.log(error)
  })
