/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== 'function'
  ) {
    return false;
  }
  //   get prototype of object this way coz by default prototype of object is hidden
  let currentPrototype = Object.getPrototypeOf(obj);
  // prototype chaining
  while (currentPrototype !== null) {
    if (currentPrototype === classFunction.prototype) {
      return true;
    }
    currentPrototype = Object.getPrototypeOf(currentPrototype);
  }
    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */