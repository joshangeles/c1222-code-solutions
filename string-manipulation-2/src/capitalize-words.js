/* exported capitalizeWords */
/* Use split() method on string to separate each word into a new array
   Use toLowerCase() method to ensure all characters are lowercased (in case of ransomCase or something) before trying to capitalize
   Go through each index of array and capitalize the first character with the toUpperCase() method
   Reassign the combination of the capitalized first character of each word with the rest of the word's characters to that index (look into slice method)
   Use the array join() property to form the fully capitalized sentence */
function capitalizeWords(string) {
  var separatedWords = string.split(' ');
  for (var i = 0; i < separatedWords.length; i++) {
    separatedWords[i] = separatedWords[i].toLowerCase();
    separatedWords[i] = separatedWords[i][0].toUpperCase() + separatedWords[i].slice(1);
  }
  return separatedWords.join(' ');
}
