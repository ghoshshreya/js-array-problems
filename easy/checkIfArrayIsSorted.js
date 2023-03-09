const checkIfArrayIsSorted = function (arr) {
  const arrString = arr.join('');
  console.log(arrString);
  return arrString === arr.sort().join('');
};

console.log(
  'Check if array is sorted :: ',
  checkIfArrayIsSorted[(1, 2, 4, 5, 7, 13)]
);
