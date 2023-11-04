const unroll = require("./unroll");

describe("#unroll", function () {
  const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];

  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]; 

  const verySmallSquare = [
    [1]
  ];


  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
  it("unrolls a 3 x 3 square array", () => {
    expect(unroll(smallerSquare)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });
  it("unrolls a 4 x 4 square array", () => {
    expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });
  it("unrolls a 1 x 1 square array", () => {
    expect(unroll(verySmallSquare)).toEqual([1]);
  });
  it("gives feedback if empty array provided", () => {
    expect(unroll([])).toEqual('Array cannot be empty');
  });

});
