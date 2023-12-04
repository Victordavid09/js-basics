// console.log
//let name = 'Brandon';
//console.log(name);

//variables using let
//let firstName = 'Brandon';
let lastName = 'Munongi';
//console.log(firstName, lastName)

//constant variables
const interestRate = 0.3;
console.log(interestRate)

// Data types: primitive data types
let name = 'Brandon'; // string literal
let age = 23; // number literal
let isApproved = true; // boolean literal
let firstName = undefined;
let selectedColor = null;

// Data types: reference data types
//Objects
let person = {
    name: 'Brandon',
    age: 23
};

//Dot notation
person.name = 'John';

//Bracket notation
person['name']= 'Mary'

console.log(person.name)

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

//Functions
//Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName)
}

greet('John', 'Smith');

//Calculating a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);