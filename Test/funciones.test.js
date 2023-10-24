const { sumar, resta, mult, div } = require("../Funciones.js");

describe("*** VALIDAR SUMAS ***", () => {
  test("1 + 1 = 2", () => {
    expect(sumar(1, 1)).toEqual(2);
  });

  test("10 + 20 = 30", () => {
    expect(sumar(10, 20)).toEqual(30);
  });

  test("7 + 3 = 10", () => {
    expect(sumar(7, 3)).toEqual(10);
  });

  test("0 + 0 = 0", () => {
    expect(sumar(0, 0)).toEqual(0);
  });
});

describe("*** VALIDAR RESTAS ***", () => {
  test("10 - 2 = 8", () => {
    expect(resta(10, 2)).toEqual(8);
  });

  test("87 - 523 = -436", () => {
    expect(resta(87, 523)).toEqual(-436);
  });

  test("5 - 3 = 2", () => {
    expect(resta(5, 3)).toEqual(2);
  });

  test("0 - 0 = 0", () => {
    expect(resta(0, 0)).toEqual(0);
  });
});

describe("*** VALIDAR MULTIPLICACIONES ***", () => {
  test("2 * 4 = 8", () => {
    expect(mult(2, 4)).toEqual(8);
  });

  test("1000 * 8.5 = 8500", () => {
    expect(mult(1000, 8.5)).toEqual(8500);
  });

  test("3 * 6 = 18", () => {
    expect(mult(3, 6)).toEqual(18);
  });

  test("0 * 5 = 0", () => {
    expect(mult(0, 5)).toEqual(0);
  });
});

describe("*** VALIDAR DIVISIONES ***", () => {
  test("20 / 2 = 10", () => {
    expect(div(20, 2)).toEqual(10);
  });

  test("15 / 3 = 5", () => {
    expect(div(15, 3)).toEqual(5);
  });

  test("20 / 0 es normal que de error", () => {
    expect(() => div(20, 0)).toThrow();
  });

  test("20 / 0 no es igual a 0", () => {
    expect(div(20, 0)).not.toEqual(0);
  });
});
