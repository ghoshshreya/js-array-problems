const checkIfArrayIsSorted = function (arr) {
  const arr1 = arr.join('');
  const arr2 = arr
    .sort(function (a, b) {
      return a - b;
    })
    .join('');
  return arr1 === arr2;
};

console.log(
  'Check if array is sorted :: ',
  checkIfArrayIsSorted([1, 2, 4, 5, 7, 13])
);
