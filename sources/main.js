// main.js file for perceptron project
const router = require('express').Router()
const Data = require('./data')
const Perceptron = require('./perceptron')
const parseInput = require('./utils').parseInput
const parseTarget = require('./utils').parseTarget
const readDataset = require('./utils').readDataset
const saveDataset = require('./utils').saveDataset


const N_EPOCHS = 10;
// reading dataset from json file
var JSON = readDataset()
const P = new Perceptron()
var pred



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

    // console.log(JSON.dataset)
    saveDataset(JSON)

    console.log('Data added to Dataset')

    res.redirect('/')
})


router.get('/train', (req, res) => {

    // JSON.dataset = readDataset()
    console.log(`Dataset size ${JSON.dataset.length}`)
    P.train(N_EPOCHS, JSON.dataset)
    // P.predict(JSON.dataset[0])
    res.redirect('/test')
})



router.get('/test', (req, res) => {
    res.render('test', {
        prediction: pred
    })
    console.log('Test data')
})


router.post('/test', (req, res) => {
    let input = parseInput(req.body.input)
    pred = P.predict(input)
    res.redirect('/test')
})






module.exports = router