function main() {
  function getCelsius(f) {
    return `${Math.floor((f - 32) * (5 / 9))}\xB0C`;
  }

  console.log(getCelsius(80));


  const minMax = (arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return {min: min, max: max};
  };
  console.log(minMax([1, 2, 3, 4, 5, 5]));
}


(function (l, w) {
  console.log(`The area of a rectangle with a length of ${l} and a width of ${w} is ${l * w}.`);
})(10, 5);

main();
