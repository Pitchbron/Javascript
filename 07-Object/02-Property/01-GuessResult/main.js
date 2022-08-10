<<<<<<< HEAD
const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false; // update
  console.log(user); // * {email : 'cc@gmail.com', isActive : false};
  user = {}; 
=======
const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false; // update
  console.log(user); // * {email : 'cc@gmail.com', isActive : false};
  user = {}; 
>>>>>>> 92010086ad3ced7bd2fee91c0912e46a886d5f1c
  console.log(user); // ** Error : Assign to constant variable