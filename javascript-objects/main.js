var student = {
  firstName: 'Joshua',
  lastName: 'Angeles',
  age: 21
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('The student\'s name is ' + fullName);
student.livesInIrvine = false;
student.previousOccupation = 'BOH Shift Lead';
console.log(fullName + ' -lives in Irvine: ' + student.livesInIrvine);
console.log(student.previousOccupation + ' was ' + fullName + '\'s previous occupation.');

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2022
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log(fullName + '\'s favorite vehicle: ', vehicle);

var pet = {
  name: 'Ace',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('Value of pet', pet);
