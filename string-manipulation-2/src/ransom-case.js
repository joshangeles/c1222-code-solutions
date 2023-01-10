/* exported ransomCase */
/* Make empty string to store ransomCase'd string
   Go through each character of string and find remainder of it's index divided by 2
   Since numbers alternate between even/odd we can apply toLowerCase() and toUpperCase() depending on index to achieve ransomCase therefore:
   If the remainder is zero then use toLowerCase() method on character and add to stored ransomCase string
   If remainder is greater than zero use toUpperCase() method on character and add to stored ransomCase string

    */
function ransomCase(string) {
  var ransomCase = '';
  for (var i = 0; i < string.length; i++) {
    if ((i % 2 === 0) === true) {
      ransomCase += string[i].toLowerCase();
    }
    if ((i % 2 > 0)) {
      ransomCase += string[i].toUpperCase();
    }
  }
  return ransomCase;
}
