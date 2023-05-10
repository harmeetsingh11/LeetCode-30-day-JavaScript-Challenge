/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
//   if array is empty
     if (nums.length === 0) { return init;}

//   storing first calculation in val
     let val = fn(init, nums[0]);
     for (let i = 1; i < nums.length; i++) {
        val = fn(val, nums[i]);
      }
     return val;
};