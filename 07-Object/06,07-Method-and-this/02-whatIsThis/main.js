<<<<<<< HEAD
var name = 'Joe';

function makeUser() { 
  const obj = {name: 'John',ref: this};
  return obj
}
let user = makeUser();
console.log(user)
=======
var name = 'Joe';

function makeUser() { 
  const obj = {name: 'John',ref: this};
  return obj
}
let user = makeUser();
console.log(user)
>>>>>>> 92010086ad3ced7bd2fee91c0912e46a886d5f1c
console.log(user.ref.name); // user.ref == this == window  then this.name == 'Joe' *