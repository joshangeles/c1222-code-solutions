/* exported includes */

function includes(list, value) {
  if (list.data === value) return true;
  while (list.next) {
    list = list.next;
    if (list.data === value) return true;
  }
  return false;
}
