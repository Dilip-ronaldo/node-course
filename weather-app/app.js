const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const url = 'http://api.weatherstack.com/current?access_key=f9413f8d01c811e76974b86f9ad386bc&query=37.8267,-122.4233&units=m'


if (!process.argv[2]) {
    console.log('Please enter a location to know the j weather forecast !')
}
else {
    geocode(process.argv[2], (error, {place_name, center} = {}) => { //using default argument property of ES6

        if (error) {
            console.log(error)
        }
        else {
            console.log(place_name)
            forecast(center[1], center[0], (error, forecastData) => {
                if (error) {
                    console.log(error)
                }
                else {
                    console.log(forecastData)
                }
            })

        }
    })





}

