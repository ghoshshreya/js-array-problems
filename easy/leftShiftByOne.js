/*
 * Input [1,2,3,4,5]
 * Ouput [2,3,4,5,1]
 */
function leftShiftByOne(arr) {
  let firstElem = arr.shift();
  arr.push(firstElem);
  return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(leftShiftByOne(arr));
