/* exported drop */
/* Make empty storage array
   Go through each index of input array and push values to the storage array but start from index specified at count
   Return the storage array
   Note: Console.log to ensure mutation of input array does not occur */
function drop(array, count) {
  var droppedArray = [];
  for (var i = count; i < array.length; i++) {
    droppedArray.push(array[i]);
  }
  return droppedArray;
}
