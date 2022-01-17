const assert = require('chai').assert;
const eqObjects = require('../eqObjects')

describe('#eqObjects', () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  it("returns true for ab, ba", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  const abc = { a: "1", b: "2", c: "3" };
  it("returns false for ab, abc", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  it("returns true for cd, dc", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  const cd2 = { c: "1", d: ["2", 3, 4] };
  it("returns false for cd, cd2", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

  it("returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns false for {a: {b: 3, c: 4}, d: 5}, {a: {b: 3, c: 4}, d: 6}", () => {
    assert.strictEqual(eqObjects({a: {b: 3, c: 4}, d: 5}, {a: {b: 3, c: 4}, d: 6}),false);
  });
});


// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)
// assertEqual(eqObjects({ a: { y: 0, z: { x: 5, w: 6} }, b: 2 }, { a: 1, b: { x: 3, w: 6} }), false)