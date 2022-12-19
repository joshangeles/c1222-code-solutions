/* exported chunk */
/* Make empty storage array
   Make empty storage sub-array
   Go through each index of input array and push() each found value to sub-array if sub-array contains less values than specified size
   When specified size is hit, push filled sub-array to storage array and empty sub array but:
   If the current index plus the specified size minus 1 (to account for value at current index) is greater than the input array length then push leftover values into sub-array...
   and push() sub-array to storage array even if specified chunk size is not met */
function chunk(array, size) {
  var chunk = [];
  var chunkedValues = [];
  for (var i = 0; i < array.length; i++) {
    if (chunkedValues.length < size) {
      chunkedValues.push(array[i]);
    }
    if (chunkedValues.length === size) {
      chunk.push(chunkedValues);
      chunkedValues = [];
    }
    if ((i + size - 1) > array.length) {
      chunk.push(chunkedValues);
    }
  }
  return chunk;
}
