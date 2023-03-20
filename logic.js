// BOOLEAN LOGIC

// Comparisons --> All of this returns a boolean value (true or false)
// > --> greater than
// < --> less than
// >= --> greater than or equal to
// <= --> less than or equal to
// == --> equality (checks only values not data types)
// != --> not equal
// === --> strict equality (same value and same data type)
// !== --> strict non-equality 
// <--END-->

// if statements
let rating = 3;
if (rating === 3) {
    console.log("HEY YOU ARE FUCKING LEGEND DUDE!");
}
// <--END-->

// else if
rating = 2;
if (rating === 3) {
    console.log("HEY YOU ARE FUCKING LEGEND DUDE!");
} else {
    console.log(`You are a pice of shit!`.toUpperCase()); ///);
}

if (rating === 3) {
    console.log("HEY YOU ARE FUCKING LEGEND DUDE!");
} else if (rating == 2) {
    console.log(`Huh not bad!`.toUpperCase()); ///);
} else {
    console.log(`You are a pice of shit!`.toUpperCase()); ///);
}
// <--END-->

// Nesting conditionals
let passwd = "who the fck";

if (passwd.length >= 6) {
    if (passwd.indexOf(' ') === -1) {
        console.log('Valid password!');
    } else {
        console.log("Password is long enough but cannot contain spaces");
    }
} else {
    console.log('Password must be at least 6 characters!');
}
// <--END-->

// TRUTHY AND FALSY VALUES -->
// # All values have an inherent truthy or falsy boolean value
//  Falsy values:
//      false
//      0
//      "" (empty string)
//      null
//      undefined
//      NaN

// # Everything else is truthy!
// <--END-->


// LOGICAL OPERATORS -->
//  && -> AND
//  || -> OR
// ! -> NOT

// AND (&&) ->
// # Both sides must be true in order for the whole thing to be true
// true && true == true
//true && false == false
// false && false == false
// false && true == false
// example
1 <= 4 && 'a' === 'a'; // true
9 > 10 && 9 >= 9; //false
'abc'.length == 3 && 1 + 1 === 4; //false

let myPass = 'who am i';
if (myPass.length >= 6 && myPass.indexOf(' ') === -1) {
    console.log("Valid Password!");
} else {
    console.log('INVALID PASSWORD!');
}


// OR (||) ->
// # If one side is true, the whole thing is true
// Only one side needs to be true
// true || true == true
// true || false ==true
// false || true == true
// false || false == false
// example
1 !== 1 || 10 === 10 //true
10 / 2 === 5 || null //true
0 || undefined //false

let yourAge = 99;
if (yourAge < 10 || yourAge >= 75) {
    console.log("Your get in for free!")
} else {
    console.log("You have to pay $2");
}

// NOT (!) ->
// ! expression returns true if the expression is false
!null // true
    !(0 === 0) //false/
    !(3 <= 9) //false

let loggedInUsr = null;
if (!loggedInUsr) {
    console.log('Fuck off!');
}
// <--END-->

// OPERATOR PRECEDENCE
// # Left to right
// ! && || 
// <--END-->


// Switch statement ->
let day = 6;
switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
}
// <--END-->


// TERNARY OPERATOR
//  # condition ? expIfTrue: expIfFalse
let luck = 'fuck';
luck !== 'fuck' ? console.log('yeh, you are the real hero!') : console.log("you are fucked!");