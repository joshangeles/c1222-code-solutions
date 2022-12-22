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
        $characters[currentCharacter].className = 'green whitespace-pre';
      }
      currentCharacter++;
      $characters[currentCharacter].className = 'underline whitespace-pre';
    }
  } else {
    $characters[currentCharacter].className += ' red';
  }
  return currentCharacter;
}
document.addEventListener('keydown', characterHandler);