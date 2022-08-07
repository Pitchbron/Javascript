let print = "";
for (let a=1; a<=8; a++) {
  for (let b=1; b<=8; b++) {
    if (b<=a) {
      print += b;
    }
  }
  print += "\n";
}
console.log(print);