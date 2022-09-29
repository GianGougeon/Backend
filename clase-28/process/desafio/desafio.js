// const minimist = require("minimist");

// const argsObj = minimist(process.argv.slice(2));
// const args = Object.values(argsObj)[0];
// console.log(args);
// const max = Math.max.apply(null, args);
// const min = Math.min.apply(null, args);
// const suma = args.reduce((a, b) => {
//   let acumulador = 0;
//   acumulador = parseInt(a) + parseInt(b);
//   return acumulador;
// });
// console.log(suma);
// const promedio = suma / args.length;
// const ejec = process.title;
// const pid = process.pid;

// evaluar(tipos(args));

// const info = {
//   datos: {
//     numeros: args,
//     promedio: promedio,
//     max: max,
//     min: min,
//     ejec: ejec,
//     pid: pid,
//   },
// };

// console.log(info);

// function tipos(args) {
//   let array = [];
//   args.forEach((element) => {
//     array.push(typeof element);
//   });
//   console.log(array);
//   return array;
// }

// function evaluar(params) {
//   params.forEach((element) => {
//     if (element != "number") {
//       console.log("error de tipo");
//       process.exit(-5);
//     }
//   });
// }

console.log(process.argv);
process.on("exit", (code) => {
  let infoErr = {};

  console.log("exit code", code);

  if (code == -5) {
    infoErr = {
      descripcion: "error de tipo",
    };
  } else {
    if (code == -4) {
      infoErr = {
        descripcion: "Entrada vacia",
      };
    }
  }
  console.log(infoErr);
});

const args = process.argv.slice(2);

validacionTipo(args);

if (args.length == 0) {
  process.exit(-4);
}

console.log(args);

const suma = args.reduce((a, b) => {
  let acumulador = 0;
  acumulador = parseInt(a) + parseInt(b);
  return acumulador;
});

const info = {
  datos: {
    numeros: args,
    promedio: suma / args.length,
    max: Math.max(...args),
    min: Math.min(...args),
    ejecutable: process.title,
    pid: process.pid,
  },
};
console.log(info);

function validacionTipo(array) {
  array.forEach((element) => {
    if (isNaN(element)) {
      console.log(element, "number");
      process.exit(-5);
    }
  });
}
