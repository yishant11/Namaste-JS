
getName();
console.log(x);

var x=7;

function getName() {
    console.log("Namaste JavaScript");
}

// x is no where defined in the memory and u r trying to access it.


// Example 1: Function Hoisting

// printHello(); // Works!

// function printHello() {
//   console.log("Hello, World!");
// }


// Example 2: Variable Hoisting with var

// console.log(x); // Outputs: undefined

// var x = 5;

// console.log(x); // Outputs: 5


// Example 3: Variable Hoisting with let and const

// console.log(y); // Throws ReferenceError: Cannot access 'y' before initialization

// let y = 10;