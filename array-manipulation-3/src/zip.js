/* exported zip */
/*
  Make subarray storage for zipped values
  Make array storage for completed zip
  Create a length variable that takes the value of the shorter array
  Go through the arrays up to the previously found length and:
    At each index take the values found at that index in both arrays and push them to subarray storage
    Push subarray into array
  After going through each index return the populated array
*/
function zip(first, second) {
  let zippedValues = [];
  const arr = [];
  let shortestLength = null;
  switch (true) {
    case first.length < second.length:
      shortestLength = first.length;
      break;
    case second.length < first.length:
      shortestLength = second.length;
      break;
    default:
      shortestLength = first.length;
  }
  for (let i = 0; i < shortestLength; i++) {
    zippedValues.push(first[i]);
    zippedValues.push(second[i]);
    arr.push(zippedValues);
    zippedValues = [];
  }
  return arr;
}
