const countLetters = sentence => {
  sentence = sentence.split(' ').join('');
  let counts = {};
  for (let char of sentence) {
    counts[char] = char in counts ? counts[char] + 1 : 1;
  }
  return counts;
};

module.exports = countLetters;

// TESTS
// console.log(countLetters('LHL'));
// console.log(countLetters('lighthouse in the house'));g