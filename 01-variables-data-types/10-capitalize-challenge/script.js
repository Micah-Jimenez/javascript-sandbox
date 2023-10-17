const myString = 'developer';

let myNewString;

myNewString = myString[0].toUpperCase() + myString.slice(1);

myNewString = myString.replace(myString[0], myString[0].toUpperCase());

console.log(myNewString);