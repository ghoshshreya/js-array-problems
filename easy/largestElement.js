const largestElement = function (arr) {
  let largest = arr[0];
  let N = arr.length;
  if (N > 1) {
    for (let x of arr) {
      if (x > largest) {
        largest = x;
      }
    }
  }
  return largest;
};

console.log(
  'Largest element is an array - ',
  largestElement([9, 2, 3, 19, 2, 1])
);
