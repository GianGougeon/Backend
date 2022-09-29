// console.log(`Directorio: ${process.cwd()}`);
// console.log(`Id del proceso: ${process.pid}`);
// console.log(`Version Node: ${process.version}`);
// console.log(`Titulo Process: ${process.title}`);
// console.log(`SO: ${process.platform}`);
// console.log(`Uso memoria: ${process.memoryUsage()}`);

function ejercicio1(numero) {
  let promedio = (numero) => {
    let suma = 0;
    for (let i = 0; i < numero.length; i++) {
      suma += numero[i];
    }
    return suma / numero.length;
  };
  let minimo = (numero) => {
    let min = numero[0];
    for (let i = 0; i < numero.length; i++) {
      if (numero[i] < min) {
        min = numero[i];
      }
    }
    return min;
  };
  let maximo = (numero) => {
    let max = numero[0];
    for (let i = 0; i < numero.length; i++) {
      if (numero[i] > max) {
        max = numero[i];
      }
    }
    return max;
  };
  let resultado = {
    datos: {
      numeros: numero,
      promedio: promedio(numero),
      maximo: maximo(numero),
      minimo: minimo(numero),
      ejecutable: process.title,
      pid: process.pid,
    },
  };
  console.log(resultado);
}
ejercicio1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
