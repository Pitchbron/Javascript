<<<<<<< HEAD
function Accumulator(startingValue) {
    // S1 : this = {}
    // S2 : modify this 

    // let currentValue = startingValue // no effect
    this.currentValue = startingValue
    this.show = function() {
        alert(this.currentValue)
    }
    // this.read = function(num) {
    this.read = function() {   
        let newInput = +prompt("Enter Number")
        this.currentValue += num;
    }

    // S3 : return this ==> instance
}

const acc1 = new Accumulator(0)
const acc2 = new Accumulator(5)
const acc3 = new Accumulator(37)

// acc1.read(7)
// acc1.show()

// console.log(acc1)
// console.log(acc2)
=======
function Accumulator(startingValue) {
    // S1 : this = {}
    // S2 : modify this 

    // let currentValue = startingValue // no effect
    this.currentValue = startingValue
    this.show = function() {
        alert(this.currentValue)
    }
    // this.read = function(num) {
    this.read = function() {   
        let newInput = +prompt("Enter Number")
        this.currentValue += num;
    }

    // S3 : return this ==> instance
}

const acc1 = new Accumulator(0)
const acc2 = new Accumulator(5)
const acc3 = new Accumulator(37)

// acc1.read(7)
// acc1.show()

// console.log(acc1)
// console.log(acc2)
>>>>>>> 92010086ad3ced7bd2fee91c0912e46a886d5f1c
// console.log(acc3)