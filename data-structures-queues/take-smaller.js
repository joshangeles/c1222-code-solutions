/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return;
  const front = queue.dequeue();
  if (queue.peek() === undefined) return front;
}
