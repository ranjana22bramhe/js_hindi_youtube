//const tinderUser =new Object()//ye ak singletion obeject h
const tinderUser={}

tinderUser.id = "123abc"
tinderUser.name="sammy"

tinderUser.isLoggedIn =false

//console.log(tinderUser);

const regularUser = {
    email: "ranjana@gmail.com",
    fullname:{
        userfullname:{
            firstname:"ranjana",
            lastname: "bramhe"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj4 ={5:"a",6:"b"}
//const obj3 ={obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2,obj4)
const obj3 = {...obj1, ...obj2}
//console.log(obj3)

const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }

]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInsturctore: "ranjana"
}
// course.courseInsturctore
const {courseInsturctore:instructore} = course
console.log(courseInsturctore)
console.log(instructore)

// {
//    " name": "ranjana",
//     "course ":"js in hindi",
//     "price": "free"
// }

[
    {},
    {
    },
    {}
]