/* exported filterOutNulls */
function filterOutNulls(values) {
  var filteredArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filteredArray.push(values[i]);
    }
  }
  return filteredArray;
}
