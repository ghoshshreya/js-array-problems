/*--------Remove duplicates from a sorted array---------*/
const removeDuplicates = function (arr) {
  let set = new Set(arr);
  return Array.from(set);
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 6, 7, 7]));
