/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var modifiedWords = [];
  for (var i = 0; i < words.length; i++) {
    modifiedWords.push(words[i] + suffix);
  }
  return modifiedWords;
}
