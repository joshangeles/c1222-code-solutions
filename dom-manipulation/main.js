var numberOfClicks = 0;
var $hotbutton = document.querySelector('.hot-button');
var $clickcount = document.querySelector('.click-count');
function incrementClicks() {
  numberOfClicks += 1;
  $clickcount.textContent = 'Clicks: ' + numberOfClicks;
  if (numberOfClicks < 4) {
    $hotbutton.className = 'hot-button cold';
  }
  if (numberOfClicks < 7 && numberOfClicks >= 4) {
    $hotbutton.className = 'hot-button cool';
  }
  if (numberOfClicks < 10 && numberOfClicks >= 7) {
    $hotbutton.className = 'hot-button tepid';
  }
  if (numberOfClicks < 13 && numberOfClicks >= 10) {
    $hotbutton.className = 'hot-button warm';
  }
  if (numberOfClicks < 16 && numberOfClicks >= 13) {
    $hotbutton.className = 'hot-button hot';
  }
  if (numberOfClicks > 16) {
    $hotbutton.className = 'hot-button nuclear';
  }
}
$hotbutton.addEventListener('click', incrementClicks);
