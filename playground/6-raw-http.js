const https = require('https')

const place = "ganesha"
const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(place) + '.json?access_token=pk.eyJ1IjoiZGlsaXBjcjciLCJhIjoiY2t5YjdzOW84MGN6bjMxbXJndzY3YmYyciJ9.hS0e_2_zxpci2UiO6T4xaA&limit=1'

const request = https.request(geoCodeUrl, (response) => {

    let data = ''
    response.on('data', (chunk) => { //chunk is a buffer
        data = data + chunk.toString()
    })

    response.on('end',()=>{
        const responseBody = JSON.parse(data)
        console.log(responseBody)
    })
})

request.on('error', (error)=>{
    console.log('An error', error)
})


request.end()