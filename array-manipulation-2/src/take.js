/* exported take */
/* make new empty array to store extracted values from input array
   Go through each index of input array up to specified count and push values into empty array
   Return empty array that has now been filled with extracted values
   Note: console.log the input array to ensure it doesn't mutate
   Note: use conditional to ensure that undefined is not returned if count exceeds array length */
function take(array, count) {
  var takenArray = [];
  for (var i = 0; i < count; i++) {
    if (count < array.length) {
      takenArray.push(array[i]);
    }
  }
  return takenArray;
}
