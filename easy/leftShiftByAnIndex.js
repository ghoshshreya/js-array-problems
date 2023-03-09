/*
 * Input [1,2,3,4,5,6], 2
 * Output [5,6,1,2,3,4]
 */
function leftShiftByKElements(nums, k) {
  function leftShift(nums) {
    let firstElem = nums.shift();
    nums.push(firstElem);
    if (k > 0) {
      leftShift(nums);
      k--;
    }
  }

  return leftShift(nums);
}
console.log('Hello', leftShiftByKElements([1, 2, 3, 4, 5, 6], 2));
