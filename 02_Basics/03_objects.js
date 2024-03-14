// singleton


// object literals

const mySym = Symbol("key1")

const JsUser = { 
    name: "Prashant",
    "full name": "Prashant Patil",
    [mySym]: "mykey1", //symbol access through []
    age: 31,
    location: "Ottawa",
    email: "pp@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);

JsUser.email = "pp100@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "pp100@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function (){

    console.log(`Hello JS user, ${this.name} is my name`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);

