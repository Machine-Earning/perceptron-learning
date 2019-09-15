// main.js file for perceptron project
const router = require('express').Router()
const Data = require('./data')
const Perceptron = require('./perceptron')

const DATASET = []


router.get('/', (req, res) => {
    res.render('layout')
    console.log('Enter Perceptron')
})

router.post('/', (req, res) => {
    DATASET.push(new Data(req.body.input, req.body.target))
    console.log('Data added to Dataset')
    res.redirect('/')
})





module.exports = router