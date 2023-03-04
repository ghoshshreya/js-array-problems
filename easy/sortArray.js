/*----------Sort an array of 0s 1s and 2s----------*/
var sortColors = function (nums) {
  let N = nums.length;
  if (N > 1) {
    let count_0 = (count_1 = count_2 = 0);
    nums.forEach((x) => {
      if (x === 0) count_0++;
      else if (x === 1) count_1++;
      else count_2++;
    });

    count_1 = count_0 + count_1;
    count_2 = count_1 + count_2;

    nums.forEach((x, i) => {
      if (i < count_0) {
        nums[i] = 0;
      } else if (i < count_1) {
        nums[i] = 1;
      } else {
        nums[i] = 2;
      }
    });
  }
  return nums;
};

console.log(sortColors([0, 0, 2, 2, 1, 2, 1]));
