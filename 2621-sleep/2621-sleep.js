/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, millis);
  });
}

/**
 * let t = Date.now()00
 * sleep(100).then(() => console.log(Date.now() - t)) // 1
 */
