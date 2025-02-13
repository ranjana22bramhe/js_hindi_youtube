const coding =["js", "rb", "py", "java","cpp"]

// coding.forEach( function(item){
//     console.log(item);
    
// })

// coding.forEach( (item) => {
// console.log(item);

// })


// function printMe(item){

//     console.log(item);
    
// }
// coding.forEach(printMe)


coding.forEach( (item, index, arr)=> {

    console.log(item, index, arr);
    
})

//for of 

// ["","", ""]
// [{}, {}, {}]

const myCoding =[

    {

        languageName: "javascript",
        languageFileName: "js"
    },
    {

        languageName: "javascript",
        languageFileName: "python"
    },{

        languageName: "javascript",
        languageFileName: "c++"
    },
]
myCoding.forEach( (item) => {

    console.log(item.languageName)
})