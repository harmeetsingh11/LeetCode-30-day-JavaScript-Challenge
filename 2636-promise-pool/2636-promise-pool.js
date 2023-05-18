/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
  let i = 0;

  //   This function executes all functions in functions array
  //   and return promises pending or resolved
  async function next() {
    if (i === functions.length) {
      return;
    }
    await functions[i++]();
    await next();
  }

  const nPromises = Array(n).fill(0).map(next);

  

  //   nPromises array to Promise.all() which will wait till all promises are resolved
  await Promise.all(nPromises);
};
/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
