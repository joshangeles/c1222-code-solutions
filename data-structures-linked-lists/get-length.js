/* exported getLength */

function getLength(list) {
  let count = 1;
  while (list.next) {
    list = list.next;
    count++;
  }
  return count;
}
