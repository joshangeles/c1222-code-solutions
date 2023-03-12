/* exported isAnagram */
/*
Turn both strings into arrays -use push() method to add each character and...
remove spaces to account for phrases that are anagrams for a word
use sort() on both arrays so all characters are organized with the same method
Convert both arrays back into a string with join() method
compare the two strings and see if they match
if they match they are an anagram, if they don't they aren't anagrams for each other
*/

function isAnagram(firstString, secondString) {
  var firstStringArray = [];
  var secondStringArray = [];
  var firstStringSortedArray = [];
  var secondStringSortedArray = [];
  var sortedFirstString = '';
  var sortedSecondString = '';
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstStringArray.push(firstString[i]);
    }
  }
  for (var k = 0; k < secondString.length; k++) {
    if (secondString[k] !== ' ') {
      secondStringArray.push(secondString[k]);
    }
  }
  firstStringSortedArray = firstStringArray.sort();
  secondStringSortedArray = secondStringArray.sort();
  sortedFirstString = firstStringSortedArray.join();
  sortedSecondString = secondStringSortedArray.join();
  if (sortedFirstString === sortedSecondString) {
    return true;
  } else {
    return false;
  }
}
