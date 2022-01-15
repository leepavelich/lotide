const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  console.log(eqArrays(actual, expected)
    ? `✅✅✅ Assertion Passed: [${actual}] === [${expected}]`
    : `🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

// TESTS
// assertArraysEqual([1, 2, 3], [1, 2, 3])
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3])