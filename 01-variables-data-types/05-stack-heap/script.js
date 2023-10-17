// Primitive values are stored on the stack
const name = "John";
const age = 30;

// Reference values are stored on the heap
const person = {
  name: "Micah",
  age: 20,
};

let newName = name;
newName = "Jonathan";

let newPerson = person;
newPerson.name = 'Bradley'

console.log(name, newName);
console.log(person, newPerson);
