/* exported reverse */
/* go through each item in list starting from the end and use push() method to add it to a new empty array then return it */
function reverse(array) {
  var reverse = [];
  if (array.length > 0) {
    for (var i = (array.length - 1); i >= 0; i--) {
      reverse.push(array[i]);
    }
  }
  return reverse;
}
