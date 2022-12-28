/* exported capitalize */
/* Check if word length is greater than one, if so do this:
   Use the substring method to get the word with everything but the first character and store it
   Use toLowercase method to lowercase the substring containing every character except the first
   Use toUppercase method on the first character of the word to capitalize it and store it
   Concatenate the stored capitalized first character with the stored lowercased substring and return value
   If word length is less than one just use toUppercase method to capitalize it and return value */
function capitalize(word) {
  if (word.length > 1) {
    var noFirstCharacter = word.substring(1, (word.length));
    var noFirstCharacterLowercased = noFirstCharacter.toLowerCase();
    var capitalizedFirstCharacter = word[0].toUpperCase();
    var capitalizedWord = capitalizedFirstCharacter + noFirstCharacterLowercased;
    return capitalizedWord;
  } else {
    return word.toUpperCase();
  }
}
