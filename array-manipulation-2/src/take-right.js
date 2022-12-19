/* exported takeRight */
/* make storage array for extracted values
   Go through each index starting from whatever index is the specified count away from the end and push found values to storage array
   BUT:
   if the specified count is larger than the array length just extract the entire array and push each value into storage array
   return storage array
   if the input */
function takeRight(array, count) {
  var takenRightArray = [];
  for (var i = (array.length - count); i < array.length; i++) {
    if (count > array.length) {
      for (i = 0; i < array.length; i++) {
        takenRightArray.push(array[i]);
      }
    }
    takenRightArray.push(array[i]);
  }
  return takenRightArray;
}
