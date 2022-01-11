const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = sentence => {
  let charSequence = sentence.slice().split(' ').join('');
  const counts = {};
  for (let char of charSequence) {
    if (char in counts) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
};

// TESTS
console.log(countLetters('LHL'));
console.log(countLetters('lighthouse in the house'));