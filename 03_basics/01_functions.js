

function sayMyName(){
    console.log("H");
    console.log("I");
    
    console.log("T");
    console.log("E");
    
    console.log("S");
    console.log("H");
}
//sayMyName()

// function addTwoNumbers(number1, number2){
//    console.log( number1+number2)
// }



function addTwoNumbers(number1, number2){
//    let result=number1+number2
//     return result

return number1+number2
 }
const result = addTwoNumbers(3,5)
// console.log("Result:" ,result);


// function loginUserMessage(username){

//     if(username===undefined){
//         console.log("please enter a username")
//         return
//     }

//     return  `${username} just logged in`
// }



function loginUserMessage(username ="sam"){

    if(!username){
        console.log("please enter a username")
        return
    }

    return  `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2,...num1){ //...rest operator or spred operator kahte hai ye depend karta hai 

    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username:"ranjana",
    proce:166
}
function handleObject(anyobject){
console.log(`username is ${anyobject.username} and priceis ${anyobject.calculateCartPrice}`);
}
// handleObject(user)
handleObject({
    username: "sam",

    price:399
})

const myNewArray =[200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))