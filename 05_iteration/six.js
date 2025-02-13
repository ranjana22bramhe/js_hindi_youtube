//const coding =["js", "rb", "py", "java","cpp"]

// const values = coding.forEach( (item) =>  {
//     //console.log(item);
//     return item
    
// })
// console.log(values);

 const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return num >4
// })
// console.log(newNums);


// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {
        title: "JavaScript Guide",
        author: "Ranjana Bramhe",
        pages: 350,
        price: 499,
        category: "Programming"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        pages: 200,
        price: 299,
        category: "Fiction"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        pages: 200,
        price: 299,
        category: "Fiction"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        pages: 200,
        price: 299,
        category: "Fiction"
    }
];
let userBooks =books.filter( (bk) =>  bk.category==="Fiction")
userBooks =books.filter( (bk) =>  bk.price>=299)
console.log(userBooks);
