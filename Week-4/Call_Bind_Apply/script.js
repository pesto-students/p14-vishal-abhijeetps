class Calculator {
  constructor() {}
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

class ScientificCalculator extends Calculator {
  constructor() {
    super();
  }
  square(a) {
    return a * a;
  }
  cube(a) {
    return a * a * a;
  }
  power(b, a) {
    return a ** b;
  }
}

const scientificCalculator = new ScientificCalculator();

console.log(scientificCalculator.add.call(null, 10, 5));

console.log(scientificCalculator.subtract.apply(null, [10, 5]));

const multiplyByTwo = scientificCalculator.multiply.bind(null, 2);
console.log(multiplyByTwo(5));

const powerOfThree = scientificCalculator.power.bind(null, 3);
console.log(powerOfThree(2));
