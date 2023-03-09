/*
 * Input [1,2,3,4,5,6], 2
 * Output [3, 4, 5, 6, 1, 2]
 */
function leftShiftByKElements(nums, k) {
  function leftShift(nums, k) {
    if (k > 0) {
      let firstElem = nums.shift();
      nums.push(firstElem);
      leftShift(nums, k - 1);
    }
    return nums;
  }
  return leftShift(nums, k);
}
console.log('Hello 2', leftShiftByKElements([1, 2, 3, 4, 5, 6], 2));
