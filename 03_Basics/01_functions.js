// function addTwoNumbers (number1, number2){

//    console.log(number1 + number2); 

// }

// addTwoNumbers(2,4)
// addTwoNumbers(2,"4")
// addTwoNumbers(2,"a")
// addTwoNumbers(2,null)


function addTwoNumbers(number1, number2) {
    
    // let result = number1 + number2
    // return result 
    return number1 + number2
}

let result1 = addTwoNumbers(1,1)

// console.log(result1)

function loginUserMessage(username){

    if (username === undefined){
        // console.log("Please enter username");
        return `Please enter username` 
    }
    return `${username} just logged in`

}

// console.log (loginUserMessage())

function calculateCartPrice (...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {

    username: "Prashant",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 12
})

const myNewArray = [200, 300, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 100, 300, 1000]));