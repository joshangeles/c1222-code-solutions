var $userList = document.querySelector('#user-list');
var userListGetRequest = new XMLHttpRequest();
userListGetRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
userListGetRequest.responseType = 'json';
userListGetRequest.addEventListener('load', function () {
  console.log('Current status: ', userListGetRequest.status);
  console.log('Response: ', userListGetRequest.response);
  for (var i = 0; i < userListGetRequest.response.length; i++) {
    var newUser = document.createElement('li');
    newUser.textContent = userListGetRequest.response[i].name;
    $userList.appendChild(newUser);
  }
});
userListGetRequest.send();
