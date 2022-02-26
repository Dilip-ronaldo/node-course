const fs = require('fs')

// const book={
//     title: 'ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book)

// fs.writeFileSync('1-json.json',bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.title)

const dataString = (fs.readFileSync('1-json.json')).toString()
const dataObject = JSON.parse(dataString)

dataObject.name = 'cr77'
dataObject.age  = 32

const outputString = JSON.stringify(dataObject)

fs.writeFileSync('1-json.json', outputString)

