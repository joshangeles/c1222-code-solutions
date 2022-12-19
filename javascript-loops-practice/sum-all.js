/* exported sumAll */
function sumAll(numbers) {
  var currentNumber = 0;
  for (var i = 0; i < numbers.length; i++) {
    currentNumber += numbers[i];
  }
  return currentNumber;
}
