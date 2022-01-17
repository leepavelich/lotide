const eqArrays = (actual, expected) => {
  if (actual === expected) return true;
  if (!Array.isArray(actual) || !Array.isArray(expected)) return false;
  if (actual.length !== expected.length) return false;
  
  for (let i = 0; i < actual.length; i++) {
    if (!eqArrays(actual[i], expected[i])) return false;
  }
  return true;
};

module.exports = eqArrays

