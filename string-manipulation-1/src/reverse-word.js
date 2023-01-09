/* exported reverseWord */
/* Starting from the end, go through each character of the word
   Store the reversed word and progressively add each character found to it note: set storage variable to empty string to prevent null/undefined
   get the reversed word from the function */
function reverseWord(word) {
  var reversedWord = '';
  for (var i = (word.length - 1); i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}
