/* exported omit */
/* Make empty storage object
   Go through each key input source object
   Check if key found in input source object matches any of the input keys
   If it does not match then use bracket notation to add it to the storage object
   Return the storage object
   */
function omit(source, keys) {
  var omitted = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key !== keys[i]) {
        omitted[keys[i]] = source[keys[i]];
      }
    }
  }
  return omitted;
}
