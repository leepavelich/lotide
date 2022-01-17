const takeUntil = (array, callback) => {
  let taken = [];
  for (let item of array) {
    if (callback(item)) break;
    taken.push(item);
  }
  return taken;
};

module.exports = takeUntil;