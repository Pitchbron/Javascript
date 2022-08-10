<<<<<<< HEAD

// let person = {
//     name : "CC",
//     address : {
//       ville : "ABC",
//       road : "Banthadthong",
//       province : "BKK"
//     }
//   }
  
//   for (let key in person){
//     console.log(key) // name , address
//   }

const user = {
    name: 'John',
    age: 27,
    isMarried: false,
  };
  
  for (let key in user) {
    // console.log(key, typeof key); // 'name','age','isMarried'
    console.log(user[key]); // access by square bracket ==> Get Value of each key
    
    // console.log(user.key, user['key']); //  find key in object as 'key' ==> undefined 
  }

//   Each iteration
//   key = 'name'
//   key = 'age'
=======

// let person = {
//     name : "CC",
//     address : {
//       ville : "ABC",
//       road : "Banthadthong",
//       province : "BKK"
//     }
//   }
  
//   for (let key in person){
//     console.log(key) // name , address
//   }

const user = {
    name: 'John',
    age: 27,
    isMarried: false,
  };
  
  for (let key in user) {
    // console.log(key, typeof key); // 'name','age','isMarried'
    console.log(user[key]); // access by square bracket ==> Get Value of each key
    
    // console.log(user.key, user['key']); //  find key in object as 'key' ==> undefined 
  }

//   Each iteration
//   key = 'name'
//   key = 'age'
>>>>>>> 92010086ad3ced7bd2fee91c0912e46a886d5f1c
//  key = 'isMarried'