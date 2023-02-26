function leftShiftByAnIndex(arr, index) {
  let tempArr = [];
  let N = arr.length;
  for (let x = 0; x < index; x++) {
    tempArr.push(arr.shift());
  }
  arr = [...arr, ...tempArr];
  return arr;
}

console.log(leftShiftByAnIndex([1, 2, 3, 4, 5, 6], 4));
