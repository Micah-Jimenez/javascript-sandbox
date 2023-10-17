let x;

const name = 'John';
const age = 30;

x = 'Hello my name is ' + name + ' and I am ' + age + ' years old';

// Template literals
x = `Hello my name is ${name} and I am ${age} years old.`

// String properties and methods
const s = 'Hello, World'

x = s.length;

// Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('o');

x = s.substring(0, 5);
x = s.substring(7);

x = s.slice(-12, -7);

x = '           Hello, World';

x = x.trim();

x = s.replace('World', 'John');

x = s.includes('Hello');

x = s.valueOf();

x = s.replace(' ', '').split(',');

console.log(x);