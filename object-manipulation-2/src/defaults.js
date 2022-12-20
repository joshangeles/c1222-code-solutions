/* exported defaults */
/* Go through each key found in source and:
   Check if that key matches any key found in target
   If it does NOT match any key then...
   Add that key to target object and assign its value as the value associated with that key in source object */
function defaults(target, source) {
  // var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  if (targetKeys.length === 0) {
    for (var sourceKey in source) {
      target[sourceKey] = source[sourceKey];
    }
  }
  for (sourceKey in source) {
    for (var targetKey in target) {
      if (targetKey !== sourceKey) {
        target[sourceKey] = source[sourceKey];
      }
    }
  }
}
