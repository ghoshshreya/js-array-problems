var merge = function (intervals) {
  let overlapping = [];
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  let i = 0;
  while (i < intervals.length) {
    let count = i + 1;
    let ov = intervals[i];
    if (intervals[i + 1] !== undefined) {
      for (let x = i + 1; x < intervals.length; x++) {
        if (ov[0] < intervals[x][1] && ov[1] >= intervals[x][0]) {
          ov[1] = Math.max(intervals[x][1], ov[1]);
          count++;
        }
      }
    }
    overlapping.push(ov);
    i = count;
  }
  return overlapping;
};

console.log(
  'Merged Overlapping --> ',
  merge([
    [1, 4],
    [2, 3],
  ])
);
