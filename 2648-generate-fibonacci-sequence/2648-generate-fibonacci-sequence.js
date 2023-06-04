/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let num1 = 0,
    num2 = 1;

  while (true) {
    yield num1;
    // Parallel Assignment with destructuring
    [num1, num2] = [num2, num1 + num2];
  }
};


/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */