function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event.target:', event.target);
}

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}
var $clickbutton = document.querySelector('.click-button');
$clickbutton.addEventListener('click', handleClick);
var $hoverbutton = document.querySelector('.hover-button');
$hoverbutton.addEventListener('mouseover', handleMouseover);
var $doubleclick = document.querySelector('.double-click-button');
$doubleclick.addEventListener('dblclick', handleDoubleClick);
