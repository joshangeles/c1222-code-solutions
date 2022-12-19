/* exported includesSeven */
function includesSeven(array) {
  var isThereASeven = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      isThereASeven = true;
    }
  }
  return isThereASeven;
}
