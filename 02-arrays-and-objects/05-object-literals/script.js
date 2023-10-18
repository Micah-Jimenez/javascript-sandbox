let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St.',
    city: 'White House',
    state: 'Tennessee',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.city;
x = person.hobbies[0];

person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = false;

person.greet = function () {
  console.log(`Hello my name is ${this.name}`);
}

person.greet();


x = person;

console.log(x);
