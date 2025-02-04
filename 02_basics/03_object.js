//singleton


//object literals
//Object.create

const mySym = Symbol("key1")
const jsUser ={
    name:"ranjana",
    "full name": "ranjana bramhe",
    [mySym]:"mykey1",
    age:18,
    location:"raipur",
    email:"ranana@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// jsUser.email ="ranjana@chatgpt.com"

// Object.freeze(jsUser)
// jsUser.email = "ranjan@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){

    console.log('helllo js user')
}
jsUser.greetingTwo = function(){

    console.log(`helllo js user, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())