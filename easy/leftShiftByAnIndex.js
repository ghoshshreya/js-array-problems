/*
 * Input [1,2,3,4,5,6], 4
 * Output [4,5,6,1,2,3]
 */
function leftShiftByAnIndex(arr, index) {
  const N = arr.length;
  if (index <= N) {
    const tempArr = [];
    for (let x = 0; x < index - 1; x++) {
      tempArr.push(arr.shift());
    }
    arr = [...arr, ...tempArr];
  } else {
    return 'Invalid Index';
  }
  return arr;
}
console.log(leftShiftByAnIndex([1, 2, 3, 4, 5, 6], 2));
