const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoicm9oaXQtYmFwYXQiLCJhIjoiY2p2eXh3cDNqMDZqdTQ4bnU3cnE3OGpjbCJ9.a7WTvS_umC56Yyoy-5nfFQ&limit=1'

    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast