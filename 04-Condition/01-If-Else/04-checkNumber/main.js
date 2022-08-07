let num = prompt("Input Number");
if(num == null || num.trim() == "" || num != isNaN(num)) {
    alert("Invalid number");
}else if(num >0) {
    alert("Positive number");
}else if(num<0){
    alert("Negative number");
}else if(num == 0) {
    alert("Zero");
}