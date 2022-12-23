/* exported isPalindromic */
/*
Make empty storage string
Go through each character of input string starting from the end and push it to empty string, effectively spelling it backwards and skip spaces
Make copy of input string without spaces
Compare now filled storage string with the copy of the input string and return true if they match and false if they don't
*/

function isPalindromic(string) {
  var reversedString = '';
  var wordWithNoSpaces = '';
  var isPalindromic = false;
  for (var i = (string.length - 1); i >= 0; i--) {
    if (string[i] !== ' ') {
      reversedString += string[i];
    }
  }
  for (var k = 0; k < string.length; k++) {
    if (string[k] !== ' ') {
      wordWithNoSpaces += string[k];
    }
  }
  if (reversedString === wordWithNoSpaces) {
    isPalindromic = true;
  }
  return isPalindromic;
}
