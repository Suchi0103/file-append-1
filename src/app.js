const path = require('path')
const express = require('express')

const app = express();
const publicDirPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000

app.use(express.static(publicDirPath))

app.get('', (res, req) =>{
    res.send('<h1>Weather</h1>')
})

app.listen(port, ()=>{
    console.log('listing to port: 3000');
})