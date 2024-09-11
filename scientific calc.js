class Calculator {
  calculate(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
 return a + b;
    } else {
      throw new Error('Invalid input');
    }
  }
}

class ScientificCalculator extends Calculator {
  calculate(a, b, operation) {
    if (operation === 'sin') {
      return Math.sin(a);
    } else if (operation === 'cos') {
      return Math.cos(a);
    } else if (operation === 'add') {
      return super.calculate(a, b);
    } else {
      throw new Error('Invalid operation');
    }
  }
}

const calculator = new Calculator();
console.log(calculator.calculate(3, 3)); // addition Output: 6
console.log(calculator.calculate(4, 3)); //add  Output: 7

const scientificCalculator = new ScientificCalculator();
console.log(scientificCalculator.calculate(Math.PI / 2, 0, 'sin')); // Output: 1
console.log(scientificCalculator.calculate(Math.PI / 3, 0, 'cos')); // Output: 0.5
console.log(scientificCalculator.calculate(2, 3, 'add')); // Output: 5