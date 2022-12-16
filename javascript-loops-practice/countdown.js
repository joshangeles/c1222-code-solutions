/* exported countdown */
function countdown(number) {
  var countdownArray = [];
  var currentNumber = number;
  while (currentNumber >= 0) {
    countdownArray.push(currentNumber);
    currentNumber--;
  }
  return countdownArray;
}
