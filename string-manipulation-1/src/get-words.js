/* exported getWords */
/* Make an empty list
   Check if string has any spaces in it with the include() method and contains actual letters
   If no spaces are found and it has actual letters add string to list
   If spaces are found use split() method to separate words and add to list */
function getWords(string) {
  var words = [];
  if (string.includes(' ') === false && string !== '') {
    words.push(string);
  }
  if (string.includes(' ')) {
    words = string.split(' ');
  }
  return words;
}
