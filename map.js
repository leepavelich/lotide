const map = (array, func) => {
  let mapped = []
  for (let elem of array) {
    mapped.push(func(elem))
  }
  return mapped
}

module.exports = map;

// TESTS
// const words = ["ground", "control", "to", "major", "tom"];
// console.log(map(words, word => word[0]))