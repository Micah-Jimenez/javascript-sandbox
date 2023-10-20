(function () {
  const user = "John";
  console.log(user);
  // (function () {const hello = () => console.log('Hello from the iife')})()
  const hello = () => console.log("Hello from the iife");
  hello();
})();

(function (name = "nobody") {
  console.log("Hello " + name);
})("Shawn");

sum = 0;
(function hello(int) {
  console.log("Hello");

  if (int !== 3) {
    hello(sum++);
  }
  else {
    return;
  }
})();
