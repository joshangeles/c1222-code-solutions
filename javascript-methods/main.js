var number1 = 1;
var number2 = 2;
var number3 = 3;
var maximumValue = Math.max(number1, number2, number3);
console.log('The maximum value is: ', maximumValue);
var heroes = [
  'Dr. Strange', 'Deadpool', 'Mount Lady', 'Silver Surfer'
];

var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('The dice rolls a random index of...' + randomIndex);
var randomHero = heroes[randomIndex];
console.log('At that index you find a ' + randomHero + '!');

var library = [
  {
    title: 'Percy Jackson & the Olympians: The Lightning Thief',
    author: 'Rick Riordan'
  },
  {
    title: 'Skyhunter',
    author: 'Marie Lu'
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck'
  }
];
var lastBook = library.pop();
console.log('lastBook: ', lastBook);
var firstBook = library.shift();
console.log('firstBook: ', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('The books in the library are: ', library);

var fullName = 'Joshua Angeles';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(sayMyName + '!');
