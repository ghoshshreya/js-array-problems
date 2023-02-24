const checkIfArrayIsSorted = function (arr) {
  let arrString = arr.join('');
  return arrString === arr.sort().join('');
};

console.log(checkIfArrayIsSorted[(1, 2, 4, 5, 7, 13)]);
