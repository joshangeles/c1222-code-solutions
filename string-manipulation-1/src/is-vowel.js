/* exported isVowel */
/* Make list of vowels
   Compare input character to list of vowels using includes() method
   If input character does not match with anything in the list it is not a vowel
   If it isn't found out that it is not a vowel it must be a vowel */
function isVowel(character) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  if (vowels.includes(character)) {
    return true;
  } else {
    return false;
  }
}
