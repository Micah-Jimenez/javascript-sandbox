console.log(addDollarSign(100));
/* 
The reason we can call on the addDollarSign function before it's
declared is because of hoisting: 'the program scans for declarations before
the code is ran'
--This only works with the function declaration method NOT the expression method
*/
// Function Declaration
function addDollarSign(value) {
  return `$${value}`
}


// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));