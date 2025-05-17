const convertToCelsius = function(temp) {
  toCelsius = ((temp-32) * (5/9));
  roundCels = toCelsius.toFixed(1);
  return parseFloat(roundCels);
};

const convertToFahrenheit = function(temp) {
  toFaren = (temp * (9/5)) + 32;
  roundFar = toFaren.toFixed(1);
  return parseFloat(roundFar);
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
