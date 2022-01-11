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
  const chars = sentence.slice()
  const results = {}
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === ' ') continue
    if (chars[i] in results) {
      results[chars[i]].push(i)
    } else {
      results[chars[i]] = [i]
    }
  }

  return results
}

assertArraysEqual(letterPositions('hello').h, [0])
assertArraysEqual(letterPositions('hello').e, [1])
assertArraysEqual(letterPositions('hello').l, [2,3])
assertArraysEqual(letterPositions('hello').o, [4])
// console.log(letterPositions('lighthouse in the house'))