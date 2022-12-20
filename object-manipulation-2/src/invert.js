/* exported invert */
/* Make empty storage object to add inverted key-value pairs
   Go through each property found in input source object
   Using bracket notation, add the found property as a value and its associated value as its property to the storage object
   Return the filled inverted storage object
 */
function invert(source) {
  var inverted = {};
  for (var property in source) {
    inverted[source[property]] = property;
  }
  return inverted;
}
