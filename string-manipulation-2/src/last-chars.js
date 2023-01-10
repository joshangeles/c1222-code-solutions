/* exported lastChars */
/* Make storage string
   Go to the character found the specified length away from the end of the string and collect each character if it is not an empty string or undefined
   Return the string */
function lastChars(length, string) {
  var lastChars = '';
  for (var i = (string.length - length); i < string.length; i++) {
    if (string[i] !== undefined && string[i] !== '') {
      lastChars += string[i];
    }
  }
  return lastChars;
}
