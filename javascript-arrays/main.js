var colors;
colors = ['red', 'white', 'blue'];
console.log('Value of colors[0]: ' + colors[0]);
console.log('Value of colors[1]: ' + colors[1]);
console.log('Value of colors[2]: ' + colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');
console.log('Colors Array: ', colors);

var students;
var numberOfStudents;
students = ['Timothee Chalamet', 'Joshua Angeles', 'Masayoshi Soken', 'Stu Dent'];
numberOfStudents = students.length;
var lastIndex = students.length - 1;
var lastStudent = students[lastIndex];
console.log('There are ' + numberOfStudents + ' students in the class');
console.log('The last student in the class is ' + lastStudent);
console.log('Student Array: ', students);
