/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
      fn(arr[i], i) && newArray.push(arr[i]);
     }
  return newArray;
};