// main.js file for perceptron project
const router = require('express').Router()
const Data = require('./data')
const Perceptron = require('./perceptron')




router.get('/', (req, res) => {
    res.render('layout')
    console.log('Enter Perceptron')
})





module.exports = router