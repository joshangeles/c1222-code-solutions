/* exported reverseWords */
/*
Use string.split() method to make an array with each index being a separate word from the string
Go through each index in the array and go through each character starting from the end of the word and...
Concatenate characters at the same index to different storage array to spell word backwards
Use array.join() method to combine the reversed words into a string
return that string
*/
function reverseWords(string) {
  var splitString = [];
  var reversedWordsArray = [];
  var reversedWords = '';
  splitString = string.split(' ');
  for (var splitStringIndex = 0; splitStringIndex < splitString.length; splitStringIndex++) {
    reversedWordsArray[splitStringIndex] = '';
    for (var wordIndex = (splitString[splitStringIndex].length - 1); wordIndex >= 0; wordIndex--) {
      reversedWordsArray[splitStringIndex] += splitString[splitStringIndex][wordIndex];
    }
  }
  reversedWords = reversedWordsArray.join(' ');
  return reversedWords;
}
