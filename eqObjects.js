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

// TESTS
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)
// assertEqual(eqObjects({ a: { y: 0, z: { x: 5, w: 6} }, b: 2 }, { a: 1, b: { x: 3, w: 6} }), false)
// assertEqual(eqObjects({a: {b: 3, c: 4}, d: 5}, {a: {b: 3, c: 4}, d: 6}),false)