// Golbal scope
let a = 300

// Block scope
if (true) {
    let a = 10
    const b = 20
   // console.log(`Inner: ${a}`);
}



// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "prashant"

    function two(){
        const website = "youtube"
        console.log(username);
    }

   // console.log(website);

    two ()

}

// one()

if (true) {

    const username = "Prashant"
    if (username === "Prashant") {
        const website = " youtube"
        // console.log(username + website);
    }

  //  console.log(website);
}

//console.log(username);

// ******** Interesting ***************

addone(5)

function addone (num){

    return num + 1
}

 
const addTwo = function (num) { // Cannot call function before this line. For this type of decaration function call must be afterwards.//

    return  num + 2
}

addTwo(5)