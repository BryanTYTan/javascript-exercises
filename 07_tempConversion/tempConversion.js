const convertToCelsius = function(tempt) {
  var new_tempt = (tempt - 32) * 5/9;
  
  return Math.round(new_tempt * 10) / 10;
};

const convertToFahrenheit = function(tempt) {
  var new_tempt = (tempt * 9/5) + 32;
  
  return Math.round(new_tempt * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
