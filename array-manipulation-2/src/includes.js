/* exported includes */
/* make boolean that will be flipped to either true or false depending on if value is found (default to false since if it isn't found it'd be false)
   go through each index of array and compare input value to value found at that index and:
   if input value is equal to value found at that index flip boolean to true */
function includes(array, value) {
  var includes = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      includes = true;
    }
  }
  return includes;
}
