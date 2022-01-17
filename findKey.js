const findKey = (obj, func) => Object.keys(obj).find(k => func(obj[k]));

module.exports = findKey;