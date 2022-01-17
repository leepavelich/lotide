const flatten = arr => [].concat(...arr);

module.exports = flatten;

// TESTS
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);