/* exported swapChars */
/* Make storage string to keep edited input string
   Go through each character of string and add it to the storage string but:
   If the character found is at the firstIndex input assign the character found at secondIndex
   If the character found is at the secondIndex input assign the character found at firstIndex
   Return the edited string once all characters from input string and saved to storage string */
function swapChars(firstIndex, secondIndex, string) {
  var swapChars = '';
  for (var i = 0; i < string.length; i++) {
    if (i !== firstIndex && i !== secondIndex) {
      swapChars += string[i];
    }
    if (i === firstIndex) {
      swapChars += string[secondIndex];
    }
    if (i === secondIndex) {
      swapChars += string[firstIndex];
    }
  }
  return swapChars;
}
