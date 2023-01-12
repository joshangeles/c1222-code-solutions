/* exported isLowerCased */
/* Use toLowerCase() on word and store lowercased word
   Compare lowercased word with word and see if they are the same
   If they are the same return true, if not return false */
function isLowerCased(word) {
  var lowerCasedWord = word.toLowerCase();
  if (lowerCasedWord === word) {
    return true;
  } else {
    return false;
  }
}
