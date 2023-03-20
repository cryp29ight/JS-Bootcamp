// OBJECTS IN JAVASCRIPT -->
// # Objects are collections of properties.
// # Properties are a key-value pair
// # Rather than accessing data using an index, we use custome keys.

// Creating an object
let user1 = {
    username: 'uniq',
    password: 'uniq101',
    email: 'unick001@gmail.com',
    'full name': "Uniq Boy"
}
console.log(user1)
console.log(user1.username)
console.log(user1["full name"])
console.log(user1['email'])
// modify 
user1.password = 'unknown';
// add new properties
user1.age = 22;
console.log(user1)

// Array + Objects
const shoppingCart = [{
        product: 'laptop',
        price: 30000,
        quantity: 1
    },
    {
        product: 'tablet',
        price: 15000,
        quantity: 1
    },
    {
        product: 'earphone',
        price: 2500,
        quantity: 2
    },
]

const student = {
    fName: 'John',
    lName: 'Wick',
    favTool: 'Pencil',
    strength: ['Chopping', 'Shoot'],
    reasons: {
        dog: 'killed',
        car: 'stolen'
    }
}