/* exported unique */
/*
  Make storage array
  Go through each index of array and push to storage array but:
    Only push to array if array does not contain that word
  Return array
*/
function unique(array) {
  const uniqueArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArr.includes(array[i])) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
}
