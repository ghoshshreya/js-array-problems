/*
 * Input [1,2,3,4,5,6], 2
 * Output [5,6,1,2,3,4]
 */
function leftShiftByKElements(nums, k) {
  let temp1 = nums.slice(0, nums.length - k); // 0, 4 -> 1,2,3,4
  let temp2 = nums.slice(nums.length - k, nums.length); // 4,6 -> 5, 6
  nums = [...temp2, ...temp1];
  console.log(nums);
}
console.log('Hello', leftShiftByKElements([1, 2, 3, 4, 5, 6], 2));
