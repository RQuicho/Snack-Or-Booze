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
  let cycle = 0;
  let squareLength = squareArray.length;

  if (squareArray[0] === undefined) {
    return 'Array cannot be empty';
  }
  if (squareArray[0].length === 0) {
    return squareArray[0];
  }

  while (newArray.length < squareArray.length * squareArray[0].length) {
    const right = () => {
      for (let i=cycle; i < squareLength; i++) {
        newArray.push(squareArray[cycle][i]);
      }
    }
    
    const down = () => {
      for (let i=cycle + 1; i < squareLength; i++) {
        newArray.push(squareArray[i][squareLength-1]);
      }
    }

    const left = () => {
      for (let i=squareLength-2; i > cycle-1; i--) {
        newArray.push(squareArray[squareLength-1][i]);
      }
    }

    const up = () => {
      for (let i=squareLength-2; i > cycle; i--) {
        newArray.push(squareArray[i][cycle]);
      }
    }

    right();
    down();
    left();
    up();

    cycle++;
    squareLength--;

    if (newArray.length >= squareArray.length * squareArray[0].length) {
      break;
    }

  }

  return newArray;
}

module.exports = unroll;
