/* eslint-disable no-console */
/*
Note: You don't have to use a loop for the logic
Use event.key to extract what key was pressed as a string
Use $characters[i].textContent to extract character string from it
*/

var $characters = document.querySelectorAll('span');
var currentCharacter = 0;
function characterHandler(event) {
  if (currentCharacter === $characters.length) {
    window.alert('You passed! Press Enter to Reset!');
    currentCharacter = 0;
    $characters[0].className = 'underline black';
    for (var i = 1; i < $characters.length; i++) {
      $characters[i].className = 'whitespace-pre';
    }
  }
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
}
document.addEventListener('keydown', characterHandler);
