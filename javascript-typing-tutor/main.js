/* eslint-disable no-console */
/*
Note: You don't have to use a loop for the logic
Use event.key to extract what key was pressed as a string
Use $characters[i].textContent to extract character string from it
*/

var $characters = document.querySelectorAll('span');
function characterHandler(event) {
  var currentCharacter = 0;
  if (event.key === $characters[currentCharacter].textContent) {
    console.log('key u pressed same as current character congratz lol');
    /*
    apply da classes to make da letter green
    increment current character
    take off underline class and apply it to next character
    */

    currentCharacter++;
    console.log(currentCharacter);
  } else {
    // dont increment da currentcharacter and make it gross n red n underlined lol
  }
  return currentCharacter;
}
document.addEventListener('keydown', characterHandler);
