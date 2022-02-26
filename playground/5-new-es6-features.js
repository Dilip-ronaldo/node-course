// // Object property shorthand

// const name = 'vsCode'
// const  userAge = 27

// const user = {
//     name, // Object property shorthand
//     age: userAge,
//     location: 'india'
// }

// console.log(user)


// //Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}
// //     name in product:name we want to create
// // rating = 5 , default if no property is matching with name rating in the object - product
// const {label:productLabel, stock, rating = 5 } = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

//destructure can be done in the functio argument also
const transaction = (type, {label, stock})=>{
    
    console.log(type, label, stock)

}

transaction('order', product)