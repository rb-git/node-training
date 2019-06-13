const request = require('request')

const geocode = (address, callback) => {
    
    const url = 'https://api.darksky.net/forecast/8cd4b8c9f2234b25fd4acfd02656316b/' + latitude + ',' + longitude + '?units=si'

    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode