/* exported removeNext */

function removeNext(list) {
  if (!list.next) return undefined;
  list.next = list.next.next;
}
