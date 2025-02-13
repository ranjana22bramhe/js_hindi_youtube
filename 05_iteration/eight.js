const myNums = [1, 2, 3]
//  myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc+curval
//  },0)

myTotal = myNums.reduce( (acc, curval) => acc+curval,0)
 console.log(myTotal)


 const shoppingCart =[
    {
        itemName: "javascript",
        price: 1000

    },

    {
        itemName: "python",
        price: 1100

    },
    {
        itemName: "c++",
        price: 1200

    },
    {
        itemName: "php",
        price: 1300

    },
 ]
 const priceToPay = shoppingCart.reduce( (acc, item) => acc+item.price,0)
 console.log(priceToPay)