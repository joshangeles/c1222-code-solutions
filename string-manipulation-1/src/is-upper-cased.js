/* exported isUpperCased */
/* Use toUppercase() method to capitalize each character on word and store the uppercase version
   Compare the uppercase version to original word
   If the uppercase version is the same as the original word, return true
   If not, return false */
function isUpperCased(word) {
  var uppercasedWord = word.toUpperCase();
  if (uppercasedWord === word) {
    return true;
  } else {
    return false;
  }
}
