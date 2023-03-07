/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  if (!list.next) return undefined;
  const node = new LinkedList(value);
  const shiftedNodes = list.next;
  node.next = shiftedNodes;
  list.next = node;
}
