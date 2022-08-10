<<<<<<< HEAD
let calculator = {
  number1: 0,
  number2: 0,
  read() {
    this.number1 = +prompt('Enter number 1');
    this.number2 = +prompt('Enter number 2');
  },
  sum() {
    return this.number1 + this.number2;
  },
  mul() {
    return this.number1 * this.number2;
  }
};

calculator.read(); // this == calculator 
console.log(calculator)
console.log(calculator.sum());
console.log(calculator.mul());
=======
let calculator = {
  number1: 0,
  number2: 0,
  read() {
    this.number1 = +prompt('Enter number 1');
    this.number2 = +prompt('Enter number 2');
  },
  sum() {
    return this.number1 + this.number2;
  },
  mul() {
    return this.number1 * this.number2;
  }
};

calculator.read(); // this == calculator 
console.log(calculator)
console.log(calculator.sum());
console.log(calculator.mul());
>>>>>>> 92010086ad3ced7bd2fee91c0912e46a886d5f1c
