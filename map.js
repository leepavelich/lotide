const map = (array, func) => {
  let mapped = []
  for (let elem of array) {
    mapped.push(func(elem))
  }
  return mapped
}

module.exports = map;