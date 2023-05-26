/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  const result = [];

  function recursive(arr, depth) {
    for (const val of arr) {
      console.log('val: ' + val);
      // check if the value is array and depth < n
      if (typeof val === 'object' && depth < n) {
        recursive(val, depth + 1);
      }
      // else simply push the value to result array
      else {
        result.push(val);
      }
    }
    return result;
  }
  return recursive(arr, 0);
};