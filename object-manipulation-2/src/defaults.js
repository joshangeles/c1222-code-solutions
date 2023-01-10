/* exported defaults */
/*
   Go through each key found in source and:
   Check if that key value matches any key value found in target
   If it does NOT match any key then...
   Add that key to target object and assign its value as the value associated with that key in source object BUT
   If the values found are different but the keys exist in both object do not assign the source value to the target object
*/
function defaults(target, source) {
  var targetKeys = Object.keys(target);
  if (targetKeys.length === 0) {
    for (var sourceKey in source) {
      target[sourceKey] = source[sourceKey];
    }
  }
  for (var sourceProperty in source) {
    if (source[sourceProperty] !== target[sourceProperty] && !targetKeys.includes(sourceProperty)) {
      target[sourceProperty] = source[sourceProperty];
    }
  }
}
