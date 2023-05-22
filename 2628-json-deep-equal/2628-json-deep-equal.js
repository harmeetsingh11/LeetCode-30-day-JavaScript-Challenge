/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
    if(o1 === null || o2 === null){
        return o1 === o2;
    }
  // base case: if types of both are not equal
  if (typeof o1 !== typeof o2) {
    return false;
  }

  //   for primitives (e.g. undefined, string, number)
  if (typeof o1 !== 'object') {
    return o1 === o2;
  }

//   check if o1 or o2 are Arrays
  if (Array.isArray(o1) || Array.isArray(o2)) {
    // for 1 is array and another is object
    if (String(o1) !== String(o2)) {
      return false;
    }
    // if both are arrays, check if they are deeply equal
    for (let index = 0; index < o1.length; index++) {
      if (!areDeeplyEqual(o1[index], o2[index])) {
        return false;
      }
    }
  } 
//   At this point both should be objects
  else {
    // check if both objects properties are not equal
    if (Object.keys(o1).length !== Object.keys(o2).length) {
      return false;
    }
    // if both objects properties are equal
    for (const key in o1) {
      if (!areDeeplyEqual(o1[key], o2[key])) {
        return false;
      }
    }
  }

  return true;
};