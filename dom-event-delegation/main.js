var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', clickHandler);

function clickHandler(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log('closest .task-list-item: ', closest);
    closest.remove();
  }
}
