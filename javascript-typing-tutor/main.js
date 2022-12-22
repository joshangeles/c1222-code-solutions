/* eslint-disable no-console */
/*
Note: You don't have to use a loop for the logic
Use event.key to extract what key was pressed as a string
Use $characters[i].textContent to extract character string from it
*/

var $characters = document.querySelectorAll('span');
var currentCharacter = 0;
function characterHandler(event) {
  if (event.key === $characters[currentCharacter].textContent) {
    console.log('key u pressed same as current character congratz lol');
    currentCharacter++;
  } else {
    // dont increment da currentcharacter and make it gross n red n underlined lol
    console.log('spacebar test: ', event.key);
  }
  return currentCharacter;
}
document.addEventListener('keydown', characterHandler);
