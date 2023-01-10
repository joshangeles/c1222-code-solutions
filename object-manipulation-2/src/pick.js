/* exported pick */
/* Make storage object
   Go through each key in input source object and check if that key matches anything in input keys
   If a match is found then use bracket/dot notation to assign the matching key and value to the storage object
   But: If any of the input keys do not match any key in the input source object ensure that no new keys are being assigned...
   If a property is being added to and object and no match is found it'd assign undefined so only add to picked if the value at that key is NOT undefined
   After going through each key return the storage object that now contains the matching keys */
function pick(source, keys) {
  var picked = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key && source[keys[i]] !== undefined) {
        picked[keys[i]] = source[keys[i]];
      }
    }
  }
  return picked;
}
