class Perimetro {
  cuadrado(lado: number) {
    return lado * 4;
  }
  rectangulo(base: number, altura: number) {
    return base * altura * 2;
  }
  circulo(radio: number) {
    return Math.PI * radio * radio;
  }
}

export { Perimetro };
