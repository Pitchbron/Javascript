let num1 = +prompt("Enter input 1");
let num2 = +prompt("Enter input 2");
let num3 = +prompt("Enter input 3");

let a;
let b;
let c;

if (num1>=num2 && num1>=num3) {
  a = num1;
  if (num2>=num3) {
    b = num2;
    c = num3;  
  } else {
    b = num3;
    c = num2;
  }
} else if (num2>=num1 && num2>=num3) {
  a = num2;
  if (num1 >= num3) {
    b = num1;
    c = num3;
  } else {
    b = num3;
    c = num1;
  }
} else if (num3>=num1 && num3>=num2) {
  a = num3;
  if (num1 >= num2) {
    b = num1;
    c = num2;
  } else {
    b = num2;
    c = num1;
  }
}

alert(`${a},${b},${c}`);