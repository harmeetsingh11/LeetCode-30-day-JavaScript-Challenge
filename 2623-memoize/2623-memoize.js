/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (args in cache) {
      // console.log('cache object:' + JSON.stringify(cache));
      return cache[args];
    }
    const result = fn(...args);
    cache[args] = result;
    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
