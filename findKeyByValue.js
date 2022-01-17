const findKeyByValue = (obj, val) => Object.keys(obj).find(k => obj[k] === val);

module.exports = findKeyByValue;