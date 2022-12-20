function onClick(event) {
  if ($lightswitch.className === 'lightswitch-on') {
    $lightswitch.className = 'lightswitch-off';
    $background.className = 'background-dark';
    return;
  }
  if ($lightswitch.className === 'lightswitch-off') {
    $lightswitch.className = 'lightswitch-on';
    $background.className = 'background-light';
  }
}
var $lightswitch = document.querySelector('#lightswitch');
var $background = document.querySelector('body');
$lightswitch.addEventListener('click', onClick);
