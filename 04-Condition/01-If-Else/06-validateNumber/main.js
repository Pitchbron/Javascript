let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");

if (isNaN(num1) || isNaN(num2)) {
  alert("Invalid number");
} else {
  alert(num1+num2);
}