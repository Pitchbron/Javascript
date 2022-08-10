<<<<<<< HEAD
const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // *Object
console.log(product2); // **Object
=======
const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // *Object
console.log(product2); // **Object
>>>>>>> 92010086ad3ced7bd2fee91c0912e46a886d5f1c
console.log(product1 === product2); // ***true