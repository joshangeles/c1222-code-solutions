/* exported getValues */
/* make empty list
   go through every key-value pair inside specified object and extract only the value
   add the found value to the empty list until every value inside the object is found and listed */
function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
