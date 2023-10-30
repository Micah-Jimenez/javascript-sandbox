const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0)

const sum = numbers.reduce((acc, curr) => acc + curr, 10);

// Using a for loop
const sum3 = () => {
    let sum = 0;
    for (const i of numbers) {
        sum += i;
    }
    return sum;
}

console.log(sum3());

const cart = [
    {id: 1, name: 'Product 1', price: 130},
    {id: 2, name: 'Product 2', price: 150},
    {id: 3, name: 'Product 3', price: 175}
]

const total = cart.reduce((acc, curr) => acc + curr.price, 0);

console.log(total);