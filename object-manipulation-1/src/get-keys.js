/* exported getKeys */
/* make empty list
   go through every key-value pair inside specified object and extract only the key
   add the found key to the empty list until every key inside the object is found and listed */
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
