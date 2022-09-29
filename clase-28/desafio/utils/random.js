const randomNums = (num) => {
    let numerosRandom = [];
    for (let i = 0; i < num; i++) {
        numerosRandom.push(Math.floor(Math.random() * 1000 + 1));
    }
    return numerosRandom;
};
process.on("message", (msg) => {
    if (msg[0] === "start") {
        const numerosRandom = randomNums(msg[1]);
        process.send(numerosRandom);
    }
});

// const randomNums = (num) => {
//     function ran(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
//     let values = [];
//     for (let index = 1; index <= 100; index++) {
//         values.push({ valor: index, cantidad: 0 });
//     }
//     for (let i = 0; i <= num; i++) {
//         let randomIndex = ran(1, 100);
//         values[randomIndex - 1].cantidad++;
//     }
//     return values;
// };
// process.on("message", (msg) => {
//     if (msg == "start") {
//         const randoms = randomNums(msg);
//         process.send(randoms);
//     }
// });
