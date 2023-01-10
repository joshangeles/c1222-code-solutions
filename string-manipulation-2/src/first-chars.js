/* exported firstChars */
/* Make storage string to keep collected characters
   Go through each character up to specified length and store it in storage string but:
   If the character found is equal to an empty string or undefined then break the loop
   Return the storage string that has the collected characters */
function firstChars(length, string) {
  var firstChars = '';
  for (var i = 0; i < length; i++) {
    if (string[i] === '' || string[i] === undefined) {
      break;
    }
    firstChars += string[i];
  }
  return firstChars;
}
