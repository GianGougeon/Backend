//sumar.js
function sumar() {
  let suma = 0;
  for (let i = 0; i < 5e9; i++) {
    suma += i;
  }
  return suma;
}

process.on("message", (msg) => {
  if (msg == "start") {
    const sum = sumar();
    process.send(sum);
  }
});
