const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.pug',{title:"first website"})
})

router.get('/contact', (req, res) => {
    res.render('contact.pug', {contacto:'Contac page'})
})


module.exports = router
