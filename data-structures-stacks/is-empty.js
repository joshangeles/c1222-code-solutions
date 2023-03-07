/* exported isEmpty */

function isEmpty(stack) {
  if (stack.peek() === undefined) return true;
  return false;
}
