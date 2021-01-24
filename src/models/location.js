const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({

    longitude : {
        type: Number,
        reuired: true
    },

    latitude : {
        type: Number,
        reuired: true
    },

    windSpeed : {       
        type: Number

    },

    windDirection : {
        type: Number

    },

    airTemperature : {
        type: Number
    }

})

module.exports = mongoose.model('Location',locationSchema)