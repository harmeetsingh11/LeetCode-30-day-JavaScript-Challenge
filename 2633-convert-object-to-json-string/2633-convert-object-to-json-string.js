var jsonStringify = function (object) {
  if (object === null || object === undefined) {
    return String(object);
  }

  //   Arrays []
  if (Array.isArray(object)) {
    // map each item in the array to make recursive call, return new array
    const result = object.map((item) => jsonStringify(item));
    // console.log(result); ["1","2","3","4","5","6","7","8]
    return `[${result.join(',')}]`; // array wrapped with [] with , between values. return [1,2,3,45,6]
  }

  // Objects {}
  if (typeof object === 'object') {
    // get keys of the object
    const getKeys = Object.keys(object);
    // console.log(getKeys);
    // map each key with value of object to make recursive call, return new array
    const keyValPairs = getKeys.map(
      (key) => `"${key}":${jsonStringify(object[key])}`
    );
    // console.log(keyValPairs); [ '"a":1', '"b":2', '"c":3', '"d":4', '"e":5' ]
    return `{${keyValPairs.join(',')}}`; // object wrapped with {} with , between key-values pairs
  }

  //   Strings
  if (typeof object === 'string') {
    return `"${String(object)}"`;
  }

  //   booleans, numbers
  return String(object);
};
