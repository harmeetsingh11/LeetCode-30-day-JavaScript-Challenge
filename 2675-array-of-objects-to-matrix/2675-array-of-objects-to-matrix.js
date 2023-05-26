var jsonToMatrix = function (arr) {
  // hashset
  const keySet = new Set();

  // used 'of' coz we want actual object in arr not index
  for (const obj of arr) {
    getKeys(obj, '');
  }

  const keys = Array.from(keySet).sort();
  const result = [keys]; // array of keys -first row

  // for second and subsequent rows - values arr
  for (const obj of arr) {
    const keyToVal = {};
    getValues(obj, '', keyToVal);
    let row = [];
    for (const key of keys) {
      if (key in keyToVal) {
        row.push(keyToVal[key]);
      } else {
        row.push('');
      }
    }
    result.push(row);
  }
  return result;

  // function to get keys
  function getKeys(obj, path) {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      // key is object
      if (isObject(obj[key])) {
        getKeys(obj[key], newPath);
      }
      // not an object
      else {
        keySet.add(newPath);
      }
    }
  }

  //
  function getValues(obj, path, keyToVal) {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      if (isObject(obj[key])) {
        getValues(obj[key], newPath, keyToVal);
      } else {
        keyToVal[newPath] = obj[key];
      }
    }
  }

  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }
};
