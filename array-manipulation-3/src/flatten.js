/* exported flatten */
/*
  Declare and initialize storage array
  Go through each index of array and:
  Check if the value at each index is an array and:
  If TRUE- loop through the values in the subarray and push to storage array
  If FALSE- Push value to storage array
*/

function flatten(array) {
  const flattenedArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element)) {
      console.log(element);
    }
  }
  return flattenedArr;
}
