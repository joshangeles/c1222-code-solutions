/* exported tail */
/* make empty array
   if array length is greater than zero find every index except first and use push() method to add it to empty array */
function tail(array) {
  var tail = [];
  if (array.length > 0) {
    for (var i = 1; i < array.length; i++) {
      tail.push(array[i]);
    }
  }
  return tail;
}
