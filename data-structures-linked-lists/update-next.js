/* exported updateNext */

function updateNext(list, value) {
  if (!list.next) return undefined;
  list.next.data = value;
}
