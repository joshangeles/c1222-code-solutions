/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return;
  queue.enqueue(queue.dequeue(queue.peek()));
}
