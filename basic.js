// PRIMITIVE TYPES --->
// Number
// String
// Boolean
// Null
// Undefined
// <--END-->

// NUMBERS IN JS->
// # -> JavaScript has ONE Number  Type 
// # -> Positive numbers -> 50
// # -> Negative numbers -> -50
// # -> Whole number (integers)
// # -> Decimal numbers -> 50.05
// <--END-->


// SIMPLE OPERATIONS WITH JS NUMBERS
// Addition -> 50 + 50 //55
// Subtraction -> 50 - 5 //45
// Multiplication -> 5 * 5 //25
// Division -> 100 / 25 //4
// Modulo!! -> 12 / 5 //2
// <--END-->


// NaN -> 
// Not a Number
// NaN is a numeric value that represents something that is not a Number [0/0 //NaN, 1+NaN // NaN]
// <--END-->


// VARIABLES -->
// # variables are like "labeled jars" for a value in JavaScript.
// # We can store a value and give it a name , so that we can ...
//  -- recall it
//  -- use it
//  -- or change it later on.
// example -->
let name = "Sp1d3r";
let age = 22;
// <--END-->


// BOOLEANS -->
// TRUE or FALSE
// example -->
let loggedIn = true;
let hasGone = false;
// <--END-->


// STRINGS -->
// # In JavaScript Strings are piece of text, or strings of characters, we wrap them in quotes
// Strings are immutable in javascript!
// example -->
let firstName = "Uniq";
let lastName = "Boy";
// # STRINGS ARE INDEXED
//  BABAYAGA
//  01234567
// # Each character has a corresponding index (a positional number)
console.log(firstName.length);
console.log(firstName[0]);
// STRING METHODS
console.log(firstName.toUpperCase()); // it will transform strings to upper case

let stuff = " who the f r u?  "
console.log(stuff.trim()); // it will trim the spaces from the beginning and end of any string

// # Some methods accepts arguments that modify their behavior.
console.log(stuff.indexOf('the')); // It will return the index number of first match & it's also case sensitive or if it's didn't find any match than it will return -1
let salad = "who the fuck sliced the cucumber";
console.log(salad.slice(1, 3)); // if we pass one argument it will be the start of slice ! if pass two arguments first one will be start and second one will be end 
console.log(salad.replace("fuck", "duck")); //it will replace the matched string with the new one which we provided in second argument & it will only replace only first match

// STRING ESCAPE CHARACTERS-->
// \n => new line
// \' => single quote
// \" => double quote
// \\ => backslash
console.log("Hey it's your boy \n from the hood!");

// STRING TEMPLATE LITERALS -->
// # Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string.
console.log(`Hey i'm fucking with ${5*2} shits every fucking day!`);
// <--END-->

// NULL & UNDEFINED -->
// NULL => Intentional absence of any value
//         Must ve assigned

// UNDEFINED => Variables that do not have an assigned value are undefined
let loggedInUser = null;
// <--END-->

// MATH OBJECT -->
// # Contains properties ans methods for mathematical constants and functions
const pi = Math.PI;

// rounding a number:
let rNum = Math.round(4.9) //5

// Absolute values:
let abNum = Math.abs(-456) //456

// Raises 2 to the 5th power:
let pwrNum = Math.pow(2, 5) //32

// Removes decimal points:
let wlNum = Math.floor(3.9999) //3

// Generating a random number between 1 to 10 using Math.random method:
let randNum = Math.ceil(Math.random() * 10)
// <--END-->

// typeof operator ===
// # typeof operator gives data type of given input
console.log(typeof 99);
console.log(typeof "balls");
// <--END-->

// parseInt & parseFloat -->
// # parseInt & parseFloat use to parse strings into  numbers
let userInput = parseInt('55')
console.log(`Hey there your input is ${userInput} !`);