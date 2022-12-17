/* exported truncate */
/* Make storage for extracted characters
   Check if string length is greater than specified length
   If it is, find every character in string up to specified length then extract and add to storage
   Append ellipsis to end of stored string
   If it isn't, use entire string and add ellipsis */
function truncate(length, string) {
  var truncatedString = '';
  if (string.length > length) {
    for (var i = 0; i < length; i++) {
      truncatedString += string[i];
    }
    truncatedString += '...';
  }
  if (string.length < length) {
    truncatedString = (string += '...');
  }
  return truncatedString;
}
