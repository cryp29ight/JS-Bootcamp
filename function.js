// FUNCTIONS IN JS -->
// # Reusable procedures
// Functions allow us to write reusable, modular code
// We define a "chunk" of code that we can then execute at a later point.
// defining and initialization of a function
function sayMyName() {
    console.log('Who the fuck r u?')
}
sayMyName();

// function with inputs
function sayMyMadaFuckinName(name) {
    console.log(`Hey it's your boy ${name}!`)
}
sayMyMadaFuckinName('SP1D3R')

function sum(num1, num2) {
    sum = num1 + num2;
    console.log(sum)
}
sum(2, 3);

// Return Keyword -->
// # Built-in methods return values when we call them & We can store those values:
// # The return statement ends function execution AND specifies the value to be returned by that function
function updtedSum(a, b) {
    return a + b;
}
let valFromSum = updtedSum(5, 7);
console.log(valFromSum)

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;

}
console.log(isValidPassword('doglhuyu3!', 'noone'))