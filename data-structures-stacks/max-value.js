/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    max = Math.max(max, stack.pop());
  }
  return max;
}
