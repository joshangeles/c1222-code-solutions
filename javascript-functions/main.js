function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return [minutes, seconds];
}
var convertedMinutes = convertMinutesToSeconds(3);
console.log(convertedMinutes[0] + ' minutes is equivalent to: ' + convertedMinutes[1] + ' seconds');

function greet(name) {
  console.log('Hey, ' + name + '!');
}
greet('Josh');

function getArea(width, height) {
  var resultingArea = width * height;
  console.log('The resulting area of a rectangle with a width of ' + width + ' and a height of ' + height + ' is ' + resultingArea);
}
getArea(4, 6);

function getFirstName(person) {
  var firstName = person.firstName;
  var lastName = person.lastName;
  return { firstName, lastName };
}
var extractedName = getFirstName({ firstName: 'Josh', lastName: 'Angeles' });
console.log('The person\'s first name is: ' + extractedName.firstName);

function getLastElement(array) {
  var lastElementIndex = array.length - 1;
  var lastElement = array[lastElementIndex];
  return lastElement;
}
var extractedLastElement = getLastElement([1, 4, 5, 3, 2, 3]);
console.log('The last element of the array is: ' + extractedLastElement);
