// console.log("Hello World");

// // VARIABLES x = 5 y= 2
// // declare let const var
// // let age = 78; // reassigned a new value
// // age = 80;
// // let age2 = 90
// // console.log(age);
// // const year = 2024; // can not be reassigned
// // const year2 = 2026;
// // console.log(year);

// // rules of naming
// //1. can not start a var name with numbers
// // const 2year = 20204
// //2. reserved words (const let, for, if)
// // const let = 9
// // 1. names that makes
// // const a = 90
// // const height = 90
// // 2 first name account number camelCasing
// // const accountNumber = 78378733773;
// // const firstName = "Wale";

// // var age = 87;
// // var age = 90;
// // console.log(age);

// //DATA TYPES - complex (objects, array) primitive (strings, numbers, boolean, null, undefined)

// // STRINGS - text characters in single or double quotes
// const firstName = "Adewale";
// const lastName = "Peter";

// // STRING PROPERTIES (with) length, concatenation (+) AND METHODS (on)
// console.log(firstName);
// console.log(firstName.length);

// const fullName = firstName + " " + lastName;
// console.log(fullName);
// console.log("Welcome " + fullName);

// //
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// console.log(fullName.indexOf("e"));
// console.log(fullName.lastIndexOf("e"));
// console.log(fullName.charAt(0));

// // startsWith, endsWith, includes

// console.log(fullName.startsWith("ade"));
// console.log(fullName.endsWith("ter"));
// console.log(fullName.includes("be"));

// // saniti trim,trimStart, trimEnd
// const email = "     test@google.com      ";
// console.log(email);
// console.log(email.trim());

// //xtract portions - slice, substring
// console.log(fullName.slice(0, 6));
// console.log(fullName.substring(0, 3));

// // NUMBERS
// const num1 = 5;
// const num2 = 3;

// // + - / *    ** %

// console.log(6 + 6);
// console.log(6 * 2);
// console.log(3 - 2);
// console.log(5 / 5);
// console.log(2 ** 3);
// console.log(5 % 5);

// let balance = 2000;
// // balance = balance + 500;
// balance += 500;
// balance -= 1000;
// // balance *= 2;
// // balance = balance - 1000;
// console.log(balance);

// let likes = 0;
// likes++;
// likes++;
// likes++;
// likes--;
// console.log(likes);

// // true or false  comparison < > <= >= === ==
// // logical operators && || !
// console.log("5" == 5); //loose  true
// console.log("5" === 5); // strict

// console.log(true && false);
// console.log(true || false);
// console.log(!true);

// // 500

// // if if(condition){action}
// // age 18+

// const usersAge = 12;

// if (usersAge >= 18) {
//   console.log("PROCEED TO VOTE");
// }

// // if else

// if (usersAge >= 18) {
//   console.log("PROCEED TO VOTE");
// } else {
//   console.log("YOU CAN NOT VOTE");
// }

// const pin = "2345";
// const enteredPin = "2345";

// if (pin === enteredPin) {
//   console.log("Perform Transaction");
// } else {
//   console.log("Incorrect Pin");
// }

// NULL AND UNDEFINED

const user = null;
let age;
console.log(user, age);
//Strings

//TRUTHY true AND FALSY  false
console.log(Boolean(0));

//FUNCTIONS
//defining a function
function sayHello() {
  console.log("Hello, User");
}

// Call a func /invoking a function
sayHello();

//PARAMETERS AND ARGUMENTS

function sayHello2(name = "Anonymous") {
  console.log(`Hello ${name}`);
}

sayHello2("Murphy");
sayHello2("Aisha");
sayHello2();
//default parameters

//RETURN KEYWORD
function addNumbers(a, b) {
  a + b * b ** 2;
  return a + b;
}
console.log(addNumbers(45, 60));
console.log(addNumbers(30, 5));

// function that converts minutes to seconds and return the value
// minutes * 60

function convertMinsToSecs(minutes) {
  const result = `${minutes} minutes is equal to ${minutes * 60} seconds`;
  return result;
}

console.log(convertMinsToSecs(1));

// Anonymous function/ function expression
const sayHi = function (name = "anon") {
  return name + " greets Everyone";
};
console.log(sayHi("Ade"));

//arrow functions =>
// product of three nmbers (multiplication)

const multiplyNums = (a, b, c) => {
  const result = a * b * c;
  return result;
};

// shorten our functions into a line  (if we return just one line)
const multiplyNums2 = (a, b, c) => a * b * c;

//COMPLEX DATA TYPES
//ARRAYS

const customers = ["John", "Peter", "Jane", "Mario", "John", "Kitana"];

console.log(customers);

// length
console.log(customers.length);
console.log(customers[3]);

// push, unshift pop, shift, indexOf, sort, reverse, slice, includes, join, toString

// customers.push("Mary");
// customers.push("Joe");
// customers.unshift("Tessy");
// customers.pop();
// customers.shift();
// console.log(customers);

// console.log(customers.indexOf("John"));
// console.log(customers.lastIndexOf("John"));
// console.log(customers.sort());
console.log(customers.reverse());
console.log(customers.slice(0, 3));
console.log(customers.includes("Ade"));

console.log(customers.join("#"));
console.log(customers.toString());

const example = "Hello";
console.log(example.substr(0, 3));
