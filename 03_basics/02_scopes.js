//var c= 300
let a=300
if(true){
    let a = 10
    const b = 20
     c = 30
    //console.log("inner:",a)

}//ye block scope h aur iske bahar hai use global scope kahte hai 


//  console.log(a)
//  console.log(b)
// console.log(c)


function one(){

    const username ="ranjana"

    function two(){

        const website ="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()

if(true){
    const username = "ranjana"
    if(username ==="ranjana"){
        const website = "youtube"

        //console.log(username+website)
    }
    //console.log(website)
}
//console.log(usernamme)


//***********intresting ********* */
console.log(addone(5))
function addone(num){
return num+1
}


addtwo(5)
const addtwo =function(num){
    return num+2
}
