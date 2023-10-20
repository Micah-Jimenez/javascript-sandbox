function main() {
  
  sayHello();
  add(5, 20);
  add(1, subtract(20, 5))
  console.log(subtract(10, 2));

}




function add(num1, num2) {
    console.log(num1 + num2);
  }

function sayHello() {
    console.log('Hello World');
  }

function subtract(num1, num2) {
  return num1 - num2;
}

main();

