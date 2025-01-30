// premitive
// 7 types : string, Number, Boolean, null, undefined,symbol, bigInt


const score = 100;
const scorevalue = 100;

const IsLoggedIn =false
const outsideTemp=null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false, because each Symbol is unique


const bigNumber = 255548547878965456322n



// reference (non-premitive)

// Arrays, objects, Function

const hereos = ["shaktiman", "naagraj", "doga"]

let myObj={
    name:"hitesh",
    age: 22,
}
const myFunction =function(){
    console.log("hello world");
}

console.log(typeof scorevalue);
console.log(typeof hereos);

//ecma script