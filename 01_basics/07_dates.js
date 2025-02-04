//dates
let myDate =new Date()

// console.log(myDate)

// console.log(myDate.toString())

// console.log(myDate.toLocaleString())

// console.log(myDate.toISOString())
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());


// let newDate = new Date(2023,0,23, 5, 3)
// console.log(newDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-23")

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString());

let myTimeStamps = Date.now()
// console.log(myTimeStamps)
// // console.log(myCreatedDate());
// console.log(Math.floor(Date.now()))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

//`${newDate.getDate()}` and the  time

newDate.toLocaleString('defaul',{

    weekday: "long"
})