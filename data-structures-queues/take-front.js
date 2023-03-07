/* exported takeFront */

function takeFront(queue) {
  return queue.dequeue(queue.peek());
}
