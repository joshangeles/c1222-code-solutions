/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return;
  const front = queue.dequeue();
  if (queue.peek() === undefined) return front;
  const second = queue.peek();
  queue.dequeue();
  queue.enqueue(front);
  return second;

}
