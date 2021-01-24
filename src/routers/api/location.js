const express = require('express');
const router = express.Router();

const Location = require('../../models/location')

router.get('/', async(req,res) => {
    try{
           const locations = await Location.find()
           res.json(locations)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const location = new Location({
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        waveHeight: req.body.waveHeight,
        waterTemperature: req.body.waterTemperature,
        wind: req.body.wind
    })

    try {
       const a1 = await location.save()
       res.json(a1)
    }
    catch(err) {
        res.send('error' + err)

    }
})


module.exports =router;