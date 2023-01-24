/* exported capitalizeWord */
/* Pass input word and use toLowerCase() method to make each character lower-cased then store it
   If the lower-cased word is 'javascript' then return 'JavaScript', if it does not equal 'javascript' then:
   Go through each character except the first, copy and store it
   Use toUpperCase() method on only the first character of the input word
   Add the lower-cased word to the upper-cased first character
   Return new capitalized word */
function capitalizeWord(word) {
  var upperCasedCharacter = '';
  var lowerCasedWord = word.toLowerCase();
  var wordMissingFirstChar = '';
  if (lowerCasedWord === 'javascript') {
    return 'JavaScript';
  } else {
    for (var i = 1; i < word.length; i++) {
      upperCasedCharacter = word[0].toUpperCase();
      wordMissingFirstChar += lowerCasedWord[i];
    }
  }
  return (upperCasedCharacter + wordMissingFirstChar);
}
