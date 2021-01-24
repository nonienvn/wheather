const express = require('express');
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/leafdb'
const app =express();
const engine = require('ejs-mate');
const path = require('path');

mongoose.connect(url, {useNewUrlParse:true})

const con = mongoose.connection

con.on('open', function(){
    console.log('connected')
})
app.engine ('ejs',engine);
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'));
app.use(require('./routers/index'))
app.use(express.static(path.join(__dirname, 'public')))
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json())


const locationRouter = require('./routers/api/location')
app.use('/api/location',locationRouter)

app.listen(8000,() => {
    console.log('function starting on http://localhost:8000');
})