function calculator(x, y, op) {
  switch (op) {
    case '+':
      console.log(x + y);
      break;
    case '-':
      console.log(x - y);
      break;
    case '*':
      console.log(x * y);
      break;
    case '/':
      console.log(Number((x / y).toFixed(2)));
      break;
    default:
      console.log('error: invalid operator input');
  }
};

calculator(1, 2, '+');
calculator(2, 7, '-');
calculator(4, 3, '*');
calculator(8, 6, '/');
calculator(1, 2, '&');