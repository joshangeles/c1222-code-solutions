var $intervalMessage = document.querySelector('.countdown-display');
function countdown() {
  $intervalMessage.textContent--;
  if ($intervalMessage.textContent === '0') {
    $intervalMessage.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownInterval);
  }
}

var countdownInterval = setInterval(countdown, 1000);
