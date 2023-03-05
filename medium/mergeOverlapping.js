var merge = function (intervals) {
  // 1. Sort the array
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });

  let overlapping = [];
  for (let i of intervals) {
    let prev = overlapping.at(-1); // Fetching the last element
    if (overlapping.length === 0 || prev[1] < i[0]) {
      overlapping.push(i);
    } else {
      prev[1] = Math.max(prev[1], i[1]);
    }
  }
  return overlapping;
};

console.log(
  'Merged Overlapping --> ',
  merge([
    [2, 3],
    [5, 5],
    [2, 2],
    [3, 4],
    [3, 4],
  ])
);
