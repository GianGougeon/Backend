const randomNums = (num) => {
    function ran(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let values = [];
    for (let index = 1; index <= 100; index++) {
        values.push({ valor: index, cantidad: 0 });
    }
    for (let i = 0; i <= num; i++) {
        let random = ran(1, 100);
        values[random - 1].cantidad++;
    }
    return values;
};
process.on("message", (msg) => {
    if (msg[0] == "start") {
        const randoms = randomNums(msg[1]);
        process.send(randoms);
    }
});
