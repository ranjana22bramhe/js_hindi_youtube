const user = {
    username: "ranjana",
    price:999,

    welcomeMessage:function() {
    console.log(`${this.username}, welcome to website`)
    console.log(this)
    }


}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username ="ranjana"
//     console.log(this.username)
// }
// chai()


// const chai =function(){
//     let username ="ranjana"
//     console.log(this.username)
// }
// chai()    is code me 


const chai = () =>{
       let username ="ranjana"
         console.log(this)
     }
     //chai()

    //  const addTwo =(num1, num2) =>{
    //     return num1 +num2
    //  }
    //  console.log(addTwo(3,4)) 


    // const addTwo =(num1, num2) => num1 +num2


    // const addTwo =(num1, num2) => (num1 +num2)



    const addTwo =(num1, num2) =>({ username:"hitesh"})
     console.log(addTwo(3,4))