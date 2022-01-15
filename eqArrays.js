const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (actual, expected) => {
  if (actual === expected) return true
  if (!Array.isArray(actual) || !Array.isArray(expected)) return false
  if (actual.length !== expected.length) return false;
  
  for (let i = 0; i < actual.length; i++) {
    if (!eqArrays (actual[i], expected[i])) return false
  }
  return true;
};

// TESTS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true)
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false)
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true)
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]) ,false)

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)