// main.js file for perceptron project
const router = require('express').Router()
const Data = require('./data')
const Perceptron = require('./perceptron')
const {
    populateArray,
    parseInput,
    parseTarget
} = require('./utils')

const DATASET = []


router.get('/', (req, res) => {
    res.render('layout')
    console.log('Enter Perceptron')
})

router.post('/', (req, res) => {

    let input = parseInput(req.body.input)
    let target = parseTarget(req.body.target)

    DATASET.push(new Data(input, target))

    // console.log(input)
    // console.log(target)
    console.log(DATASET)

    console.log('Data added to Dataset')
    res.redirect('/')
})





module.exports = router