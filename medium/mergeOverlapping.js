var merge = function (intervals) {
  console.log('Hello');
  let overlapping = [];
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });

  console.log(intervals);
};

console.log(
  merge[
    [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]
  ]
);
