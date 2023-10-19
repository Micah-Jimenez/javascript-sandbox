let x;

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring
const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const { 
  id: todoID, // Just colon == renaming
  title,
  user: { name } // colon + curly braces == destructuring
} = todo;

console.log(todoID, title, name);

// Destructure arrays
const numbers = [23, 67, 33, 49];

const [first, second, ...rest] = numbers; // brackets for arrays, curly braces for objects

console.log(first, second, rest); // ... and a variable name will give you the rest of the elements