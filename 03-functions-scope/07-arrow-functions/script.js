// function add(a, b) {
//   return a + b;
// }


// Arrow Function Syntax
const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));


// Implicit return
const subtract = (a, b) => a - b;

console.log(subtract(2, 1));
// Can leave off parenthesis with a single param
// const double = a => a * 2; 


// Returning an object
// When creating an object in a arrow function you need to surround your curly braces in parenthesis
const createObject = () => ({
  name: 'Micah',
})

console.log(createObject());


const numbers = [1, 2, 3, 4, 5];

// Arrow Function in a Callback

// numbers.forEach(function (n) {
//   console.log(n);
// })

numbers.forEach(n => console.log(n))
