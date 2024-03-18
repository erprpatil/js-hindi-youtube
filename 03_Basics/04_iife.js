// Immediately Invoked Function Expression (IIFE)

(function chai (){
    // named iife
    console.log(`DB Connected`);
}) (); // Semi colon is must after iife

((name) => {
    console.log(`DB Connected Two ${name}`);
}) ("prashant")