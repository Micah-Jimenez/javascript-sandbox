const x = 100;
const foo = 1;
var bar = 2;

if (true) {
  const y = 200
  console.log(x);
}

// console.log(y); ERROR

for (let i = 0; i < 10; i++) {
  console.log(i);
}

if (true) {
  const a = 500;
  let b = 600;
  var c = 700; // var is not block scoped, while let and const are. We want our variables to be block scoped. That is why we use let and const.
}

console.log(c);

function run() {
  var d = 100;
  console.log(d, 'from function');
}

run();

// console.log(d); ERROR: var is function scoped so we cannot access var variables outside of a function.