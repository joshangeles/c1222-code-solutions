/* exported difference */
/*
  Make storage array
  Go through each index in first array and:
  Compare the word found at that index to each word in the second array and:
  If the word is not found in the second array push the word into storage array:
  Repeat process with second array --> first array
  Return storage array
*/

function difference(first, second) {
  const arr = [];
  for (let i = 0; i < first.length; i++) {
    const element = first[i];
    if (!second.includes(element)) {
      arr.push(element);
    }
  }
  for (let i = 0; i < second.length; i++) {
    const element = second[i];
    if (!first.includes(element)) {
      arr.push(element);
    }
  }
  return arr;
}
