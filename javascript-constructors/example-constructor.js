function ExampleConstructor() {

}
console.log('value of prototype property: ', ExampleConstructor.prototype);
console.log('typeof prototype property: ', typeof ExampleConstructor.prototype);

var newConstructor = new ExampleConstructor();
console.log('value of newConstructor: ', newConstructor);
console.log('Is newConstructor an instance of ExampleConstructor: ', newConstructor instanceof ExampleConstructor);
