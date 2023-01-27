/* exported defaults */
/* Go through each key found in source and:
   Check if that key has a property with a value in the target object
   If it does NOT then...
   Add that value to the target property and assign the value of the associated property in the source object to it */
function defaults(target, source) {
  for (var sourceProperty in source) {
    if (target[sourceProperty] === undefined) {
      target[sourceProperty] = source[sourceProperty];
    }
  }
}
