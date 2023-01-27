/* exported omit */
/*  Go through each property found in input source object
    Check if each found property includes any of the input keys -use includes() method to simply matching input keys to found property
    If it does not match any of the input keys, push it into an empty storage object
    Return the filled storage object
   */
function omit(source, keys) {
  var omitted = {};
  for (var property in source) {
    if (!keys.includes(property)) {
      omitted[property] = source[property];
    }
  }
  return omitted;
}
