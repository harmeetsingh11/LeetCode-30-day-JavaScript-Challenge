/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

    // create new array using Array(len) constructor.
    // Memory is  allocated but the array doesn't actually contain any elements
    const newArray = new Array(arr.length); 

    for(let i=0; i<arr.length; i++) {
        newArray[i] = fn(arr[i],i);
    }
    return newArray;
};