/*----------Second largest element without sorting--------*/
const secondLargestElem = function (arr) {
  let largest = arr[0];
  let secondLargest = null;
  for (let x of arr) {
    if (x > largest) {
      largest = x;
    }
  }

  if (arr.length > 2) {
    secondLargest = arr[0];
    for (let x of arr) {
      if (x > secondLargest && largest > x) {
        secondLargest = x;
      }
    }
  }

  return secondLargest;
};

console.log(
  'Second Largest element is an array - ',
  secondLargestElem([1, 2, 9, 8])
);
