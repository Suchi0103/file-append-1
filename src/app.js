const path = require('path')
const express = require('express')

const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath))

app.get('', (res, req) =>{
    res.send('<h1>Weather</h1>')
})

app.listen(3000, ()=>{
    console.log('listing to port: 3000');
})