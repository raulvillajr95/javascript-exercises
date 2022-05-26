const ftoc = function(deg) {
  let fullDecimal = (deg - 32) * (5/9)
  return parseFloat(fullDecimal.toFixed(1))
};

const ctof = function(deg) {
  let fullDecimal = (deg * (9/5)) + 32
  return parseFloat(fullDecimal.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
