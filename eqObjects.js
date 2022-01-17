const eqObjects = (actual, expected) => {
  if (actual === expected) return true;
  if (typeof actual !== "object" || typeof expected !== "object") return false;
  let keys1 = Object.keys(actual);
  let keys2 = Object.keys(expected);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !eqObjects(actual[key], expected[key])) return false;
  }
  return true;
};

module.exports = eqObjects;