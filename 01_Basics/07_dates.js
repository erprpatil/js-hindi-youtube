// Date

let myDate = new Date();
//console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) // Month starts with 0 in JS

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myNewCreatedDate = new Date (2023, 0, 23, 5, 3)
// console.log(myNewCreatedDate.toLocaleString());

let myCreatedDate = new Date ("2023-01-14") //Can be changed to any date format
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(typeof myTimeStamp);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());