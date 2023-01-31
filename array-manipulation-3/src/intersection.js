/* exported intersection */
/*
  Make storage array
  Go through each index of first array and:
  Check if the value stored at that index is found in second array such that if:
    TRUE- Push the value to the storage array
    FALSE- Do nothing
  Repeat process with second array but also check if storage array already contains that value
*/
function intersection(first, second) {
  const arr = [];
  for (let i = 0; i < first.length; i++) {
    const element = first[i];
    if (second.includes(element)) {
      arr.push(element);
    } else {
      continue;
    }
  }
  for (let i = 0; i < second.length; i++) {
    const element = second[i];
    if (first.includes(element) && !arr.includes(element)) {
      arr.push(element);
    } else {
      continue;
    }
  }
  return arr;
}
