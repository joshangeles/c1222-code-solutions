/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const firstNodeData = list.data;
  list.data = list.next.data;
  list.next.data = firstNodeData;
  return list;
}
