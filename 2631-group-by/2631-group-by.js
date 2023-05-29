/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const result = {};
  for (const item of this) {
    const key = fn(item);

    // if key is not already present in result object
    if (!result.hasOwnProperty(key)) {
      result[key] = [];
    }

    result[key].push(item);
  }
  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */