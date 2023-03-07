/* exported takeTop */

function takeTop(stack) {
  if (stack.peek() === undefined) return;
  const top = stack.peek();
  stack.pop();
  return top;
}
