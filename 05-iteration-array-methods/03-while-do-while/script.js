let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// Loop over arrays

// const array = [10, 20, 30, 40];
// while (i < array.length) {
//   console.log(array[i]);
//   i++;
// }

// Nesting while loops

// while (i <= 5) {
//   console.log(i);

//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

let height;
do {
  height = Number(prompt('Height: '));
  console.log(height);
} while (height <= 0 || height > 10);

for (let i = 0; i < height; i++) {
  console.log('#');
  console.log('-');
}