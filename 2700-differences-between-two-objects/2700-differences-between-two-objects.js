/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
  // If both are primitives(not objects), return empty if they equal else show difference
  if (!isObject(obj1) && !isObject(obj2)) {
    return obj1 === obj2 ? {} : [obj1, obj2];
  }

  // If one is primitive and other is object
  if (!isObject(obj1) || !isObject(obj2)) {
    return [obj1, obj2];
  }

  // If one is array and the other is object
  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return [obj1, obj2];
  }

  // If both array or both object, then recursion
  const diff = {};

  for (const key in obj1) {
    // look for obj1 keys present in obj2 (common keys)
    if (obj2.hasOwnProperty(key)) {
      const result = objDiff(obj1[key], obj2[key]);
      // console.log('result: ' + result);
      // check if result object we get is empty or not
      if (Object.keys(result).length > 0) {
        diff[key] = result;
      }
    }
  }
  return diff;

  function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
  }
}