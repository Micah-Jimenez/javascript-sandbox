for (let i = 1; i <= 100; i++) {
  let fizz = i % 3 === 0;
  let buzz = i % 5 === 0;
  if (buzz && fizz) {
    console.log('FizzBuzz');
  } else if (buzz) {
    console.log('Buzz');
  } else if (fizz) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}