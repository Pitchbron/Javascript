<<<<<<< HEAD
/*
INPUT : null
OUTPUT : Object
*/

const THE_SENTINEL = 'stop'
function createObjectFromUserInput () {

    const result = {}
    
    //  modified Object
    let key;
    let value;
    do {
    
    key = prompt("Enter key")
    value = prompt("Enter value")
    if(key !== null && key.trim !== '' && key !== THE_SENTINEL && value !== THE_SENTINEL){
        // Update ได้
        result[key] = value
    }

    } while (key !== THE_SENTINEL && value !== THE_SENTINEL)


    return result
}

let userCreateObject = createObjectFromUserInput()

=======
/*
INPUT : null
OUTPUT : Object
*/

const THE_SENTINEL = 'stop'
function createObjectFromUserInput () {

    const result = {}
    
    //  modified Object
    let key;
    let value;
    do {
    
    key = prompt("Enter key")
    value = prompt("Enter value")
    if(key !== null && key.trim !== '' && key !== THE_SENTINEL && value !== THE_SENTINEL){
        // Update ได้
        result[key] = value
    }

    } while (key !== THE_SENTINEL && value !== THE_SENTINEL)


    return result
}

let userCreateObject = createObjectFromUserInput()

>>>>>>> 92010086ad3ced7bd2fee91c0912e46a886d5f1c
console.log(userCreateObject)