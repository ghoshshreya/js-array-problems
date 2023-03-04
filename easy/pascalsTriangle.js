/*----------GENERATE PASCALS' TRIANGLE----------*/
var generatePascalsTriangle = function (numRows) {
  const arr = [];
  if (numRows > 0) {
    arr.push([1]);
    if (numRows > 1) {
      arr.push([1, 1]);
      for (let x = 2; x < numRows; x++) {
        const mini = new Array(x);
        mini[0] = mini[x] = 1;
        let i = 1;
        let j = x - 1;
        while (i <= j) {
          const sum = arr[x - 1][i - 1] + arr[x - 1][i];
          mini[i] = mini[j] = sum;
          i++;
          j--;
        }
        arr.push(mini);
      }
    }
  }
  return arr;
};

console.log(generatePascalsTriangle(5));
