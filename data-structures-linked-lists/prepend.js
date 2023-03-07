/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const node = new LinkedList(value);
  node.next = list;
  return node;
}
