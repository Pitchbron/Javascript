<<<<<<< HEAD
const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok'
    }
  }
};

// console.log(product1.distributor.address.province)

const product2 = {}


// console.log(product2.distributor.address.province)

// Mechanism
//console.log(product2.distributor.address) // undefined.address == crash

console.log(product2.distributor?.address)  // chaining dot  when before ? is Object
// console.log(undefined.address)

// Solve
=======
const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok'
    }
  }
};

// console.log(product1.distributor.address.province)

const product2 = {}


// console.log(product2.distributor.address.province)

// Mechanism
//console.log(product2.distributor.address) // undefined.address == crash

console.log(product2.distributor?.address)  // chaining dot  when before ? is Object
// console.log(undefined.address)

// Solve
>>>>>>> 92010086ad3ced7bd2fee91c0912e46a886d5f1c
console.log(product2.distributor?.address?.province) 