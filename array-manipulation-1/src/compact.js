/* exported compact */
/* go through each item in list and check for banned characters/values
   for every item that is not a banned character/value push to new empty array
   return new array without banned characters/values
   note: NaN is weird, found Number.isNaN() method that can be used to evaluate it in a comparison */
function compact(array) {
  var compactArray = [];
  var negativeZero = -0;
  var emptyString = '';
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== undefined && array[i] !== false && array[i] !== null && Number.isNaN(array[i]) === false && array[i] !== 0 && array[i] !== negativeZero && array[i] !== emptyString) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}

/* can't use:
  false
  null
  NaN
  0 and -0
  undefined
  empty strings
  */
