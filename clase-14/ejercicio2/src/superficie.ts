class Superficie {
  supCuadrado(lado: number) {
    return lado * lado;
  }
  supRectangulo(base: number, altura: number) {
    return base * altura;
  }
  supCirculo(radio: number) {
    return Math.PI * radio * radio;
  }
}

export { Superficie };
