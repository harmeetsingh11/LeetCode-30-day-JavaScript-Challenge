/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
  return new Promise((resolve) => {
    // inProgress :to keep track of promise
    // index: index of current functions in array
    let inProgress = 0,
      index = 0;
    function helper() {
      // base case
      if (index >= functions.length) {
        // if all promises are resolved
        if (inProgress === 0) {
          resolve();
          return;
        }
      }

      while (index < functions.length && inProgress < n) {
        inProgress++; // increment because function at current index is executing and promise is pending
        functions[index++]().then(() => {
          // decremented because promise is resolved
          inProgress--;
          helper();
        });
      }
    }
    helper();
  });
};
/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
