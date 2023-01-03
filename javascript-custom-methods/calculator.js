/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var currentSum = 0;
    for (var i = 0; i < numbers.length; i++) {
      currentSum += numbers[i];
    }
    return currentSum;
  },
  getAverage(numbers) {
    var currentSum = 0;
    var totalNumbers = 0;
    for (var i = 0; i < numbers.length; i++) {
      currentSum += numbers[i];
      totalNumbers++;
    }
    return currentSum / totalNumbers;
  }

};
