<<<<<<< HEAD


//C = a * b ex. 25 = 5 * 5
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    // for (let j = 2; j < Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime === true) {
    //or if (isPrime) {
    console.log(i);
  }
}
=======


//C = a * b ex. 25 = 5 * 5
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    // for (let j = 2; j < Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime === true) {
    //or if (isPrime) {
    console.log(i);
  }
}
>>>>>>> 92010086ad3ced7bd2fee91c0912e46a886d5f1c
