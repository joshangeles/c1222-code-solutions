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
    if (currentCharacter < $characters.length) {
      console.log('key u pressed same as current character congratz lol');
      $characters[currentCharacter].className += ' green';
      if ($characters[currentCharacter].className.includes('underline')) {
        $characters[currentCharacter].className = 'green';
      }
      currentCharacter++;
      $characters[currentCharacter].className = 'underline';
    }
  } else {
    // dont increment da currentcharacter and make it gross n red n underlined lol
  }
  return currentCharacter;
}
document.addEventListener('keydown', characterHandler);
