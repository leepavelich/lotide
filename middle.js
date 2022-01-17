const eqArrays = require('./eqArrays');

const middle = arr => {
  if (arr.length === 1 || arr.length === 2) return [];
  if (arr.length % 2 !== 0) return [arr[Math.floor(arr.length / 2)]]; // odd length
  return [arr[arr.length / 2 - 1], arr[arr.length / 2]]; // even length
};

module.exports = middle