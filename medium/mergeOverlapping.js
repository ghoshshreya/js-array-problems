var merge = function (intervals) {
  let overlapping = [];
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });

  console.log(intervals);

  for (let x = 0; x < intervals.length; x++) {
    let ov = [intervals[x][0], intervals[x][1]];
    console.log(ov);
    let count = x;
    for (let y = x + 1; y < intervals.length; y++) {
      if (
        intervals[x][0] < intervals[y][1] &&
        intervals[x][1] > intervals[y][0]
      ) {
        ov[0] = intervals[x][0];
        ov[1] = intervals[y][1];
        count++;
      } else {
        break;
      }
    }

    overlapping.push(ov);

    x = count;
    console.log(x);
  }

  return overlapping;
};

console.log(
  'Merged',
  merge([
    [1, 3],
    [8, 16],
    [15, 18],
    [2, 6],
  ])
);
