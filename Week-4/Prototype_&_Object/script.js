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

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getDetails = function () {
  return `${this.make} ${this.model} ${this.year}.`;
};

function Car(make, model, year, numDoors) {
  Vehicle.call(this, make, model, year);
  this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.getDetails = function () {
  return `${this.make} ${this.model} ${this.year} ${this.numDoors}.`;
};

const vehicle = new Vehicle('Tata', 'Sumo', 2010);
const car = new Car('Tata', 'Nexon', 2022, 5);

console.log(vehicle.getDetails());
console.log(car.getDetails());
