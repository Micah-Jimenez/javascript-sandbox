// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = [];

if (x) {
  console.log('This is Truthy');
} else {
  console.log('This is Falsy');
}

console.log(Boolean(x));

// Truthy and Falsy caveats

// children = 0;

// if (children) {
//   console.log(`You have ${children} children`);
// } else {
//   console.log("Please enter number of children");
// }

children = 0;

if (children != undefined) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children");
}

// Checking for empty arrays

const posts = [];

if (posts.length) {
  console.log('List Post');
} else {
  console.log('No Posts To List');
}

// Checking for empty object
const user = {
  name: 'Micah'
};

const user2 = {}

if (Object.keys(user2).length) {
  console.log('List User');
} else {
  console.log('No User');
}

// Loose Equality (==)
console.log(false == 0);
console.log("" == 0);
console.log(null == undefined);

console.log(false === 0);
console.log("" === 0);
console.log(null === undefined);