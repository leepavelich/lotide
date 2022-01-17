const letterPositions = sentence => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') continue;
    if (!results[sentence[i]]) results[sentence[i]] = [];
    results[sentence[i]].push(i);
  }
  return results;
};

module.exports = letterPositions;

// TESTS
// assertArraysEqual(letterPositions('hello').h, [0]);
// assertArraysEqual(letterPositions('hello').e, [1]);
// assertArraysEqual(letterPositions('hello').l, [2,3]);
// assertArraysEqual(letterPositions('hello').o, [4]);
// console.log(letterPositions('lighthouse in the house'))