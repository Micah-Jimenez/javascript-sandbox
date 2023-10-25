// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

for (let i = 0; i < 10; i++) {
    console.log('number', i);
}

// Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Loop through an array
const names = ['Brad', 'Micah', 'John', 'Tim'];
const n = names.length;
for (let i = 0; i < n; i++) {
    if (names[i] === 'Micah'){
        console.log('Micah is the best!');
    } else {
        console.log(names[i]);
    }  
}