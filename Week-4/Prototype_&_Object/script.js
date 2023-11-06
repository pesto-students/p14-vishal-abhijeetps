const person = {};

Object.defineProperty(person, 'name', { value: 'SomeName', writable: false });
Object.defineProperty(person, 'age', { value: 25, writable: true });
Object.defineProperty(person, 'email', {
  value: 'somename@email.com',
  writable: false,
});

person.getAge = function () {
  return this.age;
};

person.setAge = function (age) {
  this.age = age;
};

console.log(person.getAge());
person.setAge(27);
console.log(person.getAge());
