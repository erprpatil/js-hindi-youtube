const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// } ) 

// function printMe (item){
//     console.log(item);
// }

// coding.forEach(printMe)

const myCoding = [
    {
        langauageName: "javascript",
        languageFileName: "js"
    },
    {
        langauageName: "java",
        languageFileName: "java"
    },
    {
        langauageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {

    console.log(item.langauageName);

})