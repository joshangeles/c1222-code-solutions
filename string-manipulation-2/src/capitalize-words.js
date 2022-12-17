/* exported capitalizeWords */
/* Make storage for the edited string
   Use toUpperCase() method on first character on string and store in storage string
   Use toLowerCase() method on string to lower-case every character except the first and concatenate to storage string
   Use toUpperCase() method on every character found after a space
   Return string with capitalized Words */
function capitalizeWords(string) {
  var capitalizedFirstCharacterInString = '';
  var capitalizedWords = '';
  capitalizedFirstCharacterInString += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    capitalizedFirstCharacterInString += string[i].toLowerCase();
  }
  for (i = 0; i < string.length; i++) {
    if (capitalizedFirstCharacterInString[i] === ' ') {
      capitalizedWords += ' ' + capitalizedFirstCharacterInString[i + 1].toUpperCase();
    }
  }
  return capitalizedWords;
}
