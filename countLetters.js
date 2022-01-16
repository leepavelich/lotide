const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = sentence => {
  sentence = sentence.split(' ').join('');
  let counts = {};
  for (let char of sentence) {
    counts[char] = char in counts ? counts[char] + 1 : 1
  }
  return counts;
};

// TESTS
// console.log(countLetters('LHL'));
// console.log(countLetters('lighthouse in the house'));