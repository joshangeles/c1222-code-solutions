var $headerMessage = document.querySelector('.message');
function changeMessage(input) {
  $headerMessage.textContent = input;
}
setTimeout(changeMessage, 2000, 'Hello There');
