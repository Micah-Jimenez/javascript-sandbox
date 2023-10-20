// window.alert("Hello");
// console.log(window.innerWidth);

const x = 100;
console.log(x, 'in global');

function main() {

  run();

  console.log(x, 'in main function');

  if (true) {
    console.log(x, 'in block');
  }

  // console.log(y); ERROR
  add();

}


function run() {
  console.log(window.innerHeight);
}

function add() {
  const x = 1 // this overwrites the global x variable this is called 'variable shadowing'
  const y = 50;
  console.log(x + y);
}


main();
