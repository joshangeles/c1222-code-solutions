/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return;
  const front = queue.peek();
  queue.dequeue();
  const almostFront = queue.peek();
  if (!almostFront) return front;
  queue.enqueue(front);
}
