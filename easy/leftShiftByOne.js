/*
* Input [1,2,3,4,5]
* Ouput [2,3,4,5,1]
*/
function leftShiftByOne(arr) {
  if (arr.length > 1) {
    let temp = arr.shift();
    arr.push(temp);
  }
  return arr;
}

let arr = [1,2,3,4,5];
console.log(leftShiftByOne(arr));
