const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);
// console.log(marvel_heroes[3][1]);


// push vs concat 
// concat stores value in a new array. There fore const allHeroes
  
// const allHeroes = marvel_heroes.concat(dc_heroes)

// console.log(allHeroes);

const all_new_hereos = [...marvel_heroes, ...dc_heroes] //spread operator

// console.log(all_new_hereos);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Prashant")) 

console.log(Array.from("Prashant"));

console.log(Array.from({name: "Prashant"})); //

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));