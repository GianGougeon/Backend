const calculadora = require("../calculadora");
const assert = require("assert");

describe("Pruebas", function () {
  describe("Probando la calculadora", function () {
    it("el método suma debería devolver el valor 5 ", function () {
      result = calculadora.suma(2, 3);
      assert.equal(result, 5);
    });
  });
});
