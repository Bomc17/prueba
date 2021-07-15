const express = require('express')
const app = express()
const path = require('path')
const pug = require('pug')

// settings
app.set('port',3000)
app.set('view engine','pug')
app.set('views',path.join(__dirname, 'views'))


//routes
app.use(require('./routes/index.js'))

//static files
app.use(express.static('src'))


// listening the server
app.listen(app.get('port'), () => {
    console.log('server on port ',app.get('port'));
})