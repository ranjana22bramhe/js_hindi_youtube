// if statment

// const isUserloggedIn =true
// const temperature =41

// if( temperature===40){
// console.log("less than 50")
// }else{
// console.log("temperature is greature than 50")

// }
// console.log("execute")

//<, >, <=, >=, ==, ===, !=

// const scope =200
// if(scope>100){
//     const power ="fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// const balance =1000

// if(balance >500) console.log("test"),console.log("test2")

// if(balance <500){
//     console.log("less than 500")
// }else if(balance<750){
//     console.log("less than 750")
// }else if(balance<900){
//     console.log("less than 750")
// }else{
//     console.log("less than 1200")
// }


const isUserloggedIn =true
const debitCard =true
const LoggedInFromGoogle =false
const loggedInfromEmail = true

if(isUserloggedIn && debitCard && 2==3){
    console.log("allow to by course")
}

if(LoggedInFromGoogle || loggedInfromEmail){
    console.log("user logged in")
}