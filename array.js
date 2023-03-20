//  ARRAYS IN JS -->
// Arrays and objects are collections of data
// Arrays are ordered collections of values
// Creating arrays -->
// # To make an empty array
let students = [];

// An array of strings
let colors = ['red', 'green', 'blue', 'yellow'];

// An array of numbers
let numbers = [0, 55, 69];

//A mixed array
let stuff = [true, 69, 'cat', null, false];

// # Arrays are indexed
console.log(colors.length);
console.log(colors[0]);

// Modifying arrays
console.log(colors)
colors[0] = 'purple';
colors[1] = 'orange';
console.log(colors)

// Array methods ->
// # Push => add an item to the end of the array
colors.push('black');
console.log(colors)

// # Pop => remove an item from the end of the array
let removedItem = colors.pop();
console.log(colors)
console.log(removedItem)

// # Unshift => Add an item to the beginning of the array
colors.unshift('brown')
console.log(colors)

// # Shift => Remove an item from the beginning of the array
removedItem = colors.shift();
console.log(removedItem)

// MORE ARRAY METHODS!->
let arr1 = ['item1', 'item2', 'item3'];
let arr2 = ['chicken', 'apple', 'orange'];
// # concat => merge arrays
let items = arr1.concat(arr2)
console.log(arr1)
console.log(items)

// # includes => look for a value it returns true or false
console.log(arr2.includes('chicken'))

// # indexOf => return the incex of given item, same with string method if item doesn't exist it will return -1
console.log(arr2.indexOf('chicken'))

// # join => create a string from an array
console.log(arr2.join(' '))

// # reverse => reverse an array
arr2.reverse();
console.log(arr2)

// # slice => copy portion of an array
console.log(arr2.slice(1, 3))

// # splice => remove/replace elements in array
arr2.splice(1, 1, "Beef")
console.log(arr2)
// # sort => sorts an array
arr2.sort()
console.log(arr2)