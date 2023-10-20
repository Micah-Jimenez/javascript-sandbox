function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  second();

}

first();

for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(i + j);
  }
  // console.log(j); ERROR
}




const x = 100;

if (true) {
  if ( x === 100) {
    const y = 200;
    console.log(x + y);
  }
  // console.log(y); ERROR
}
