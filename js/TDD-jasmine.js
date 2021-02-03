// Test Driven Development test using Jasmine and a detect triangle function.
// 1. 3 panjang segitiga (sisi a, sisi b, sisi c) telah diterima.
//    -Bila salah satu sisi bernilai < 1, maka gagal.
//    -Bila salah satu sisi tidak bernilaikan integer, maka gagal.
// 2. Mendeteksi segitiga
//    -Kembalikan “Segitiga Sama Sisi” bila a, b, dan c sama.
//    -Kembalikan “Segitiga Sama Kaki” bila:
//    -Sisi a, b sama, namun c berbeda.
//    -Sisi a, c sama, namun b berbeda.
//    -Sisi b, c sama, namun a berbeda.
//    -Kembalikan “Segitiga Sembarang” bila a, b dan c berbeda panjang.
//    -Pendeteksian segitiga selesai.
const detectTriangle = (sideA, sideB, sideC) => {
  [sideA, sideB, sideC] = [sideA, sideB, sideC]
    .map((side) => {
      if (!Number.isInteger(side)) {
        throw new Error("Sides have to be Integer");
      }

      if (side < 1) {
        throw new Error("Strange Triangle");
      }

      return side;
    })
    .sort();

  if (sideA === sideB && sideA === sideC) {
    return "Equilateral Triangle";
  }

  if (sideA === sideB || sideB === sideC) {
    return "Isosceles Triangle";
  }

  return "Scalene Triangle";
};

describe("Detect the triangle", () => {
  it("Should fail if the sides are less than 1", () => {
    expect(() => detectTriangle(-1, 2, 2)).toThrowError("Strange Triangle");
    expect(() => detectTriangle(1, -2, 2)).toThrowError("Strange Triangle");
    expect(() => detectTriangle(1, 2, -2)).toThrowError("Strange Triangle");
  });

  it("Should fail if the sides are not Integer", () => {
    expect(() => detectTriangle("a", 2, 2)).toThrowError(
      "Sides have to be Integer"
    );
    expect(() => detectTriangle(1, "a", 2)).toThrowError(
      "Sides have to be Integer"
    );
    expect(() => detectTriangle(1, 2, "a")).toThrowError(
      "Sides have to be Integer"
    );
    expect(() => detectTriangle(" ", 2, 2)).toThrowError(
      "Sides have to be Integer"
    );
  });

  it("Should detect Equilateral Triangle if all sides are equal", () => {
    expect(detectTriangle(1, 1, 1)).toEqual("Equilateral Triangle");
    expect(detectTriangle(1, 2, 2)).not.toEqual("Equilateral Triangle");
  });

  it("Should detect Isosceles Triangle if only two sides are equal", () => {
    expect(detectTriangle(1, 1, 2)).toEqual("Isosceles Triangle");
    expect(detectTriangle(1, 2, 1)).toEqual("Isosceles Triangle");
    expect(detectTriangle(1, 2, 2)).toEqual("Isosceles Triangle");
    expect(detectTriangle(4, 1, 4)).toEqual("Isosceles Triangle");
  });

  it("should detect Scalene Triangle if no sides are the same", () => {
    expect(detectTriangle(1, 2, 3)).toEqual("Scalene Triangle");
  });
});
