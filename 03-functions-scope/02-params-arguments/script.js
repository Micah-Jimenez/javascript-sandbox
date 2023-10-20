function main() {
  // Default Params
  function registerUser(user = "Bot") {
    // if (!user) {
    //   user = 'Bot'
    // }
    return user + " is registered";
  }

  console.log(registerUser());

  // Rest Params
  function sum(...numbers) {
    // The rest operator allows you to input an unlimited amount of arguments to the function by putting all the arguments into an array
    const n = numbers.length;
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }

  console.log(sum(1, 2, 3));

  // Objects as Params
  function loginUser(user = { id: 0, name: "Mr. Doe" }) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
  }

  const user = {
    id: 1,
    name: "Micah",
  };

  console.log(loginUser(user));

  // Arrays as Params
  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  console.log(getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

main();
