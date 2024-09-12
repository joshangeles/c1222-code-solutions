/* exported union */
/*
  Declare storage array and populate it with the values found in first array
  Go through each index of second array and:
  If the value is NOT found then push it into the storage array
  Return storage array
*/

function union(first, second) {
  const arr = [];
  for (let i = 0; i < first.length; i++) {
    const element = first[i];
    arr[i] = element;
  }
  for (let i = 0; i < second.length; i++) {
    const element = second[i];
    if (!first.includes(element)) {
      arr.push(element);
    }
  }
  return arr;
}
