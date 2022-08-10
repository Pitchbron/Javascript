<<<<<<< HEAD
let user = prompt("Enter your name", "Guest");
if (user==="" || user===null || user!== "codecamp") {
  user = "Guest";
} else if (user==="codecamp") {
  pass = prompt("Enter password");
  if (pass==="123456") {
    alert("Welcome " + user);
  } else {
    alert("Wrong password");
  }
=======
let user = prompt("Enter your name", "Guest");
if (user==="" || user===null || user!== "codecamp") {
  user = "Guest";
} else if (user==="codecamp") {
  pass = prompt("Enter password");
  if (pass==="123456") {
    alert("Welcome " + user);
  } else {
    alert("Wrong password");
  }
>>>>>>> 92010086ad3ced7bd2fee91c0912e46a886d5f1c
}