var twoSum = function (nums, target) {
  const mp = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    console.log(diff, mp);
    if (diff in mp) return [i, mp[diff]];
    mp[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 3, 4, 8], 9));
