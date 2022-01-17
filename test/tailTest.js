const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns length 2 for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
  it("returns length 1 for [1,5]", () => {
    assert.strictEqual(tail([1,5]).length, 1);
  });
});
