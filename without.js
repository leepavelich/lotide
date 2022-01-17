const without = (source, itemsToRemove) => {
  let passed = source.slice();
  for (let item of itemsToRemove) {
    passed = passed.filter(elem => elem !== item);
  }
  return passed
};

module.exports = without;