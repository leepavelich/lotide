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