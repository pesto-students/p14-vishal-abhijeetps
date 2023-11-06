// Inheritance

class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`Driving ${this.make} ${this.model}.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}


// Polymorphism
class Shape {
  constructor() {}
  calculateArea() {}
}

class Rectangle extends Shape {
  constructor() {
    super();
  }
  calculateArea(width, height) {
    return width * height;
  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }
  calculateArea(base, height) {
    return 0.5 * base * height;
  }
}

class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea(radius) {
    return Math.PI * radius * radius;
  }
}

console.log(new Rectangle().calculateArea(5, 4));
console.log(new Triangle().calculateArea(3, 4));
console.log(new Circle().calculateArea(5));
