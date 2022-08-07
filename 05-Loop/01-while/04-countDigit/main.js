let number = +prompt("EnterNumber");
let count = 0;
while(number) {
    let remainder = number%10;
    number = (number-remainder)/10;
    
    count++;
}
alert(count);