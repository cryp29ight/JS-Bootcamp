// LOOPS IN JS ->
// # for loop
for (let i = 1; i <= 10; i++) {
    console.log(`Hey i'm counting on this for loop where i = ${i}!`)
}

// we can use forloops with arrays
const animals = ['lions', 'tigers', 'pussy', 'sheep', 'cow']
// printing arry items using for loop
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}

// Nested for loop
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        console.log('#')
    }
    console.log('###End###')
}

// # While loop
// A while loop continues to run as long as its test condition is true
let num = 0;
while (num < 5) {
    console.log(`I am from while loop & here is the current value of num variable: ${num}!`)
    num++;
}

// # For...of  loop
// A nice and easy way of iterating over arrays or other iterable objects
for (const animal of animals) {
    console.log(`Animals from the animals array ${animal}!`)
}

// # For...in loop
// Loop over the keys in object
const count = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5
}

for (let key in count) {
    console.log(key)
    console.log(count[key])
}