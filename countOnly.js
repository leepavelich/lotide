// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = (allItems, itemsToCount) => {
  let counts = {};
  for (let item of allItems) {
    if (itemsToCount[item]) counts[item] = (counts[item] + 1) || 1;
  }
  return counts;
};

module.exports = countOnly;

// TESTS
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);