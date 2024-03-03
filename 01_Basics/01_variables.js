const accountId = 144553;
let accountEmail = "prashant@google.com";
var accountPassword="12345";
accountCity = "Pune";

//accountId =2 // not allowed because it is a const

accountEmail="pp@pp.com";
accountPassword = 54321;
accountCity = "Ottawa";

console.log(accountId); 
console.table([accountEmail, accountPassword, accountCity]);



/*
Prefer not to use var
beacuse of issue in block scope and functional scope.

*/