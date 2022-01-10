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
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = (source, itemsToRemove) => {
  let outArr = source.slice();
  for (let item of itemsToRemove) {
    outArr = outArr.filter(elem => elem !== item);
  }
  return outArr;
};

// TESTS
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);