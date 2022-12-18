/* exported capitalizeWords */
/* Make storage for edited string
   Go through each character of string and use toUpperCase() method on first character until space is found
   When space is found, push collected characters into empty array, save what index it is at, and end loop
   Run another loop using saved index and continue process of collecting characters and pushing to array
   Use array.join() method and combine collected characters after end of string is found */
function capitalizeWords(string) {
  var editedString = '';
  var wordArray = [];
  editedString += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i] !== ' ') {
      editedString += string[i];
    }
    if (string[i] === ' ') {
      wordArray.push(editedString);
      editedString = '';
      i++;
    }
  }
  if (i === string.length) {
    return wordArray.join(' ');
  }
}
