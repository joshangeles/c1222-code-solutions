/* exported dropRight */
/* Make empty storage array
   Go through each index of array and push found value to storage array but:
   Stop going through each index when the current index is the specified count away from the end of the array
   Return the now filled storage array */
function dropRight(array, count) {
  var dropRight = [];
  for (var i = 0; i < (array.length - count); i++) {
    dropRight.push(array[i]);
  }
  return dropRight;
}
