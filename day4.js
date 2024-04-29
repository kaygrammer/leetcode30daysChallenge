/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// using the map function
var map = function (arr, fn) {
  return arr.map(fn);
};

// without map function
var maple = function (arr, fn) {
  let result = [];
  for (const i in arr) {
    result.push(fn(arr[i], i));
  }
  return result;
};

//using for loop instead

var map = function (arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }
  return res;
};
