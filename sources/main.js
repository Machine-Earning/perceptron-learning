// main.js file for perceptron project
const router = require('express').Router()
const Data = require('./data')
const Perceptron = require('./perceptron')
const parseInput = require('./utils').parseInput
const parseTarget = require('./utils').parseTarget
const readDataset = require('./utils').readDataset
const saveDataset = require('./utils').saveDataset




var DATASET = readDataset()
const P = new Perceptron()




router.get('/', (req, res) => {
    res.render('main', {
        dataNum: DATASET.length
    })
    console.log('Enter Data')
})

router.post('/', (req, res) => {

    let input = parseInput(req.body.input)
    let target = parseTarget(req.body.target)

    DATASET = readDataset()
    DATASET.push(new Data(input, target))
    saveDataset(DATASET)

    console.log(DATASET)

    console.log('Data added to Dataset')
    res.redirect('/')
})


router.get('/train', (req, res) => {

    DATASET = readDataset()
    console.log(`Dataset size ${DATASET.length}`)

    P.train(DATASET.length, DATASET)
    P.predict(DATASET[0].input)
    res.redirect('/')
})


router.get('/test', (req, res) => {

})





module.exports = router