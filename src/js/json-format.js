const dog = {
  name: 'Mango',
  age: 3,
  isHappy: true,
};

console.log(dog);

const string = JSON.stringify(dog);
console.log(string);

const parsed = JSON.parse(string);
console.log(parsed);
