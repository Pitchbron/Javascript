<<<<<<< HEAD
let input;
let sum = 0;
let count=0;
do{
  input = +prompt("IEnter Number");
  if(!(input=== null || input.trim()==="" || input == 0 || isNaN(input))){
    sum += +input;
    count++;
  }
  
}while (!(input=== null || input.trim()==="" || input == 0 || isNaN(input)))

if(count>0){
 console.log(sum);
 console.log(sum/count);
=======
let input;
let sum = 0;
let count=0;
do{
  input = +prompt("IEnter Number");
  if(!(input=== null || input.trim()==="" || input == 0 || isNaN(input))){
    sum += +input;
    count++;
  }
  
}while (!(input=== null || input.trim()==="" || input == 0 || isNaN(input)))

if(count>0){
 console.log(sum);
 console.log(sum/count);
>>>>>>> 92010086ad3ced7bd2fee91c0912e46a886d5f1c
}