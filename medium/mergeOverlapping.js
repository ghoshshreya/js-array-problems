var merge = function (intervals) {
  console.log('Hello');
  let overlapping = [];
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });

  for (let x = 0; x < intervals.length - 1; x++) {
    let ov = [intervals[x][0], intervals[x][1]];
    let count = x + 1;
    for (let y = x + 1; y < intervals.length; y++) {
      console.log(intervals[x], intervals[y]);
      if (
        intervals[x][0] < intervals[y][1] &&
        intervals[x][1] > intervals[y][0]
      ) {
        ov[0] = intervals[x][0];
        ov[1] = intervals[y][1];
        count++;
        console.log('Test', ov);
      } else {
        break;
      }
    }
    console.log(count);
    x = count;
    overlapping.push(ov);
  }

  return overlapping;
};

console.log(
  merge([
    [1, 3],
    [8, 16],
    [15, 18],
    [2, 6],
  ])
);
