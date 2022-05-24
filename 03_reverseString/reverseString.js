const reverseString = function(str) {
  let list = []

  for (let i = str.length-1; i >= 0; i--) {
    list.push(str[i])
  }

  return list.join('')
};

// Do not edit below this line
module.exports = reverseString;
