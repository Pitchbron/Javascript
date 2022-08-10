<<<<<<< HEAD

let answer = prompt("Player 1 : Enter Number");
let guess;
if (+answer<1 || +answer>99){
    alert("Invalid range");
} else {
    let counter =0;
    do{
        let guess = prompt("Player 2 : Enter Number")
        if(+answer == +guess){
            alert("correct");
            alert(counter)
        }else if (+guess<+answer && +guess>0){
            alert("Less than");

        }else if (+guess>+answer){
            alert("More than");
        }else {
            alert("Please input number between 1-99");
        }

    }while (+guess != +answer)
=======

let answer = prompt("Player 1 : Enter Number");
let guess;
if (+answer<1 || +answer>99){
    alert("Invalid range");
} else {
    let counter =0;
    do{
        let guess = prompt("Player 2 : Enter Number")
        if(+answer == +guess){
            alert("correct");
            alert(counter)
        }else if (+guess<+answer && +guess>0){
            alert("Less than");

        }else if (+guess>+answer){
            alert("More than");
        }else {
            alert("Please input number between 1-99");
        }

    }while (+guess != +answer)
>>>>>>> 92010086ad3ced7bd2fee91c0912e46a886d5f1c
}