var tabContainer = document.querySelector('.tab-container');
var tabs = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');
tabContainer.addEventListener('click', clickHandler);
function clickHandler(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] === event.target) {
        tabs[i].className += ' active';
      } else {
        tabs[i].className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var k = 0; k < views.length; k++) {
      if (views[k].getAttribute('data-view') === dataView) {
        views[k].className = 'view';
      } else {
        views[k].className = 'view hidden';
      }
    }
  }
}
