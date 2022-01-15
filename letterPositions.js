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
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const letterPositions = sentence => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') continue;
    if (!results[sentence[i]]) results[sentence[i]] = [];
    results[sentence[i]].push(i);
  }
  return results;
};

// TESTS
// assertArraysEqual(letterPositions('hello').h, [0]);
// assertArraysEqual(letterPositions('hello').e, [1]);
// assertArraysEqual(letterPositions('hello').l, [2,3]);
// assertArraysEqual(letterPositions('hello').o, [4]);
// console.log(letterPositions('lighthouse in the house'))