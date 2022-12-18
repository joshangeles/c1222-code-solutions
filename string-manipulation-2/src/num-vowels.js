/* exported numVowels */
/*  Use toLowerCase() method on string to cut down on amount of checks needed to see if something is a vowel or not in half
    Make array with all lower-cased vowels
    Compare each character in string to list of lower-cased vowels using includes() method
    If the character found matches a vowel increase a counter variable by one
    After going through the entire string, return the counter variable */
function numVowels(string) {
  var lowerCasedString = string.toLowerCase();
  var lowerCasedVowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelCounter = 0;
  for (var i = 0; i < string.length; i++) {
    if (lowerCasedVowels.includes(lowerCasedString[i])) {
      vowelCounter++;
    }
  }
  return vowelCounter;
}
