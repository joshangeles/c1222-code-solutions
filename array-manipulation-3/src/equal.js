/* exported equal */
/*
  Declare and initialize a boolean to true
  Go through each value in whichever array is longer but:
  If the arrays are the same length use the length of the first array then:
  Compare the values found at that index in both arrays to each other
  If they are not strictly equals then assign false to the boolean
  Return the boolean
*/

function equal(first, second) {
  let isEquals = true;
  let highestLength = null;
  switch (true) {
    case first.length > second.length:
      highestLength = first.length;
      break;
    case second.length > first.length:
      highestLength = second.length;
      break;
    default:
      highestLength = first.length;
  }
  for (let i = 0; i < highestLength; i++) {
    const firstValue = first[i];
    const secondValue = second[i];
    if (firstValue !== secondValue) {
      isEquals = false;
    }
  }
  return isEquals;
}
