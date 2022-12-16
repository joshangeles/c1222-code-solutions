/* exported oddOrEven */
function oddOrEven(numbers) {
  var identifiedNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      identifiedNumbers.push('even');
    } else {
      identifiedNumbers.push('odd');
    }
  }
  return identifiedNumbers;
}
