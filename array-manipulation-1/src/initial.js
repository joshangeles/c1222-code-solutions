/* exported initial */
/* go through every item in list except for the last one and use push() method to store in new empty array */
function initial(array) {
  var initial = [];
  if (array.length > 0) {
    for (var i = 0; i < array.length - 1; i++) {
      initial.push(array[i]);
    }
  }
  return initial;
}
