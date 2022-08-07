let accumulate = 100000;

for (let i=1; i<=10; i++) {
  accumulate += accumulate*0.025;
}
console.log(accumulate);