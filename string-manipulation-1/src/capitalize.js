/* exported capitalize */
/* Check if word length is greater than one, if so do this:
   Use the substring method to get the word with everything but the first character and store it
   Use toLowercase method to lowercase the substring containing every character except the first
   Use toUppercase method on the first character of the word to capitalize it and store it
   Concatenate the stored capitalized first character with the stored lowercased substring and return value
   If word length is less than one just use toUppercase method to capitalize it and return value */
function capitalize(word) {
  var noFirstCharacter;
  var noFirstCharacterLowercased;
  var capitalizedFirstCharacter;
  var capitalizedWord;
  if (word.length > 1) {
    noFirstCharacter = word.substring(1, (word.length));
    noFirstCharacterLowercased = noFirstCharacter.toLowerCase();
    capitalizedFirstCharacter = word[0].toUpperCase();
    capitalizedWord = capitalizedFirstCharacter + noFirstCharacterLowercased;
    return capitalizedWord;
  } else {
    return word.toUpperCase();
  }
}
