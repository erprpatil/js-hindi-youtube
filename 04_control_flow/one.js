// if

// const isUSerLoggedIn = true
// const temperature = 41

// if (temperature === 50){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }



// <, >, <=, >=, ==. !=, ===, !==

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`USer power: ${user}`);
// }

// console.log(`USer power: ${user}`);


// const balance = 1000

// // if (balance > 500) console.log("test"), console.log("test2"); This can be done. But not a good practice.

// if (balance < 500) {
//     console.log("Less than 500");

// } else if (balance < 750){
//     console.log("Less than 750");

// }else if (balance < 900){
//     console.log("Less than 900");

// } else{
//     console.log("Lessh than 1200");
// }

const isUSerLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUSerLoggedIn && debitCard && 2==3) { //All conditions should be true to go into the below code.
    console.log("ALoowed to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}