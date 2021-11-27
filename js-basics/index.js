console.log('Hello World');

const interestRate = 0.3;

//let username = 'threenbe';
//console.log(username);
//let age = 24;
let isApproved = true;
let selectedColor = null;

let person = {
    username: 'threenbe',
    age: '24'
};
console.log(person);
person.username = 'threenbean';
console.log(person.username);
person['username'] = 'threenbe';
console.log(person['username']);
let usernameSelection = 'username';
person[usernameSelection] = 'threenbean';
console.log(person);

let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = 'green';
console.log(selectedColors);
console.log('length of array is ' + selectedColors.length);

function greet() {
    console.log('Hyello World');
}
greet();

function greetWithName(name, message) {
    console.log('Hyellow ' + name + ', ' + message);
}
greetWithName('Rain', 'you suck!');

function square(number) {
    return number * number;
}
console.log(square(3));