const userEmail = "p@google.com"

// if (userEmail) {
//     console.log("Got user email");
// }else {
//     console.log("Don't have user email");
// }


/* falsy values

flase, 0, -0, BigInt 0n, "", null, undefined, Nan (not a number)

truthy values

"0", 'false', " ", [], {}, function(){}

*/

// const arr = []

// if (arr.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length) {
    console.log("object is empty");
}