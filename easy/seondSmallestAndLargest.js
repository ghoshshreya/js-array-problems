/* ---------Find Second Smallest and Second Largest Element in an array----------*/
/* --------- TC - O(N) ----------*/
const secondSmallestNum = function (arr) {
  const arrayLength = arr.length;
  const obj = {
    smallest: arr[0],
    largest: arr[0],
    secondSmallest: null,
    secondLargest: null,
  };
  if (arrayLength > 1) {
    for (let x = 0; x < arrayLength; x++) {
      if (arr[x] <= obj.smallest) {
        obj.smallest = arr[x];
      }
      if (arr[x] >= obj.largest) {
        obj.largest = arr[x];
      }
      if (
        obj.secondSmallest !== null &&
        arr[x] > obj.smallest &&
        arr[x] <= obj.secondSmallest
      ) {
        obj.secondSmallest = arr[x];
      } else if (obj.secondSmallest === null && x <= arrayLength - 1) {
        obj.secondSmallest = arr[x + 1];
      }
      if (
        obj.secondLargest !== null &&
        arr[x] < obj.largest &&
        arr[x] >= obj.secondLargest
      ) {
        obj.secondLargest = arr[x];
      } else if (obj.secondLargest === null && x <= arrayLength - 1) {
        obj.secondLargest = arr[x + 1];
      }
    }
    return [obj.secondSmallest, obj.secondLargest];
  }
  return -1;
};

console.log(secondSmallestNum([8, 4, 1, 3, 7, 2, 5]));
