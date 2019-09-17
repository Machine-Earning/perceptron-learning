// main.js file for perceptron project
const router = require('express').Router()
const Data = require('./data')
const Perceptron = require('./perceptron')
const parseInput = require('./utils').parseInput
const parseTarget = require('./utils').parseTarget
const readDataset = require('./utils').readDataset
const saveDataset = require('./utils').saveDataset



// reading dataset from json file
var JSON = readDataset()
const P = new Perceptron()



router.get('/', (req, res) => {
    res.render('main', {
        dataNum: JSON.dataset.length
    })
    console.log('Enter Data')
})



router.post('/', (req, res) => {
    // getting the input
    let input = parseInput(req.body.input)
    let target = parseTarget(req.body.target)


    JSON.dataset.push(new Data(input, target))
    res.redirect('/')
    // console.log(JSON.dataset)
    saveDataset(JSON)

    console.log('Data added to Dataset')


})


router.get('/train', (req, res) => {

    // JSON.dataset = readDataset()
    console.log(`Dataset size ${JSON.dataset.length}`)
    P.train(JSON.dataset.length, JSON.dataset)
    // P.predict(JSON.dataset[0])
    res.redirect('/test')
})



router.get('/test', (req, res) => {
    res.render('test', {
        dataNum: JSON.dataset.length
    })
    console.log('Test data')
})


router.post('/test', (req, res) => {
    let input = parseInput(req.body.input)
    P.predict(input)
    res.redirect('/test')
})






module.exports = router