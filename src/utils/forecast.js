const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'https://api.darksky.net/forecast/8cd4b8c9f2234b25fd4acfd02656316b/' + latitude + ',' + longitude + '?units=si'
    
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.'
            + ' Max temp = ' + body.daily.data[0].temperatureHigh + ' Min temp = ' + body.daily.data[0].temperatureLow);
        }
    })
}

module.exports = forecast