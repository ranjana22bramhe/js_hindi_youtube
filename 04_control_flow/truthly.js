const userEmail = "ranjana@.ai"//agar khali string rahta hai to use false and agar string ki jagah par array ya object khali rehta hai to bhi wo true value dega

if(userEmail){
    console.log("got user email")
}else{
    console.log("dont have user email")
}

//falsy value
// false, 0, -0, BigInt 0n, "", null, undefiened, NaN

//truethy  value
// true, "0", "false", "_", [], {}, function(){},

// if(userEmail.length ===0){
//     console.log("array is empty")
// }
const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("obj is empty")
}

//Nullish coalescing operator (??): null undefiend

let val1;
//val1 = 5?? 10
//val1 = null ?? 10

//val1 =undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1)


// terniary operator
//condition ? true : false

const iceTeaPrice =100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")