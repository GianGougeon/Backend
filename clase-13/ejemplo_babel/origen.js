// const lista = [2, 3, 4, 5];

// lista.map((x) => x * x).forEach((x) => console.log(x));

class RandomRGB {
  constructor() {
    this.r = Math.floor(Math.random() * 256);
    this.g = Math.floor(Math.random() * 256);
    this.b = Math.floor(Math.random() * 256);
  }
  getColor() {
    return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
  }
}
console.log(new RandomRGB().getColor());
