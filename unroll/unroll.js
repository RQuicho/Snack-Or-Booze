// const square = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ]; 
// returns: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

// const smallerSquare = [
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"]
// ];

// unroll(smallerSquare); // ["a", "b", "c", "f", "i", "h", "g", "d", "e"]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// return based on length of array
// [arr[0][0], arr[0][1], arr[0][2], arr[1][arr.length-1], arr[2][arr.length-1], arr[2][arr.length-2], ...]
// store length of square as length of first array
// use if statements? to travel in clock-wise spiral (if arr[0][arr.length-1] go to arr[1][arr.length-1])
// use for or while loops?
// - 4 cases: right (last val in first array),
//            down (last val in last array),
//            left (first val in last array),
//            up (first val in second array)
// stops when number of vals in new array equal number of vals in old array.



const squareArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]; 

const unroll = (squareArray) => {
  const newArray = [];
  let firstCycle = 0;
  let squareLength = squareArray[firstCycle].length; // gets smaller after a full circle pass (4x4 becomes 2x2)

  const right = () => {
    for (let i=0; i < squareLength; i++) {
      newArray.push(squareArray[firstCycle][i]);
    }
  }
  
  const down = () => {
    
  }

  // right();

  return newArray;


}

module.exports = unroll;
