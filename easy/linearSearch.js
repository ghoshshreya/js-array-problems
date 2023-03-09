const linearSearch = function (arr, num) {
  for (let x of arr) {
    if (x === num) return num;
  }
  return -1;
};

console.log('Linear Search --> ', linearSearch([1, 2, 3, 4, 5, 6], 3));
