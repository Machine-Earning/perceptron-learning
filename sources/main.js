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

    DATASET.push(new Data(input, target))


    console.log(DATASET)

    console.log('Data added to Dataset')
    res.redirect('/')
})


router.get('/train', (req, res) => {

    console.log(`Dataset size ${DATASET.length}`)

    P.train(DATASET.length, DATASET)
    P.predict(DATASET[0].input)
    res.redirect('/')
})


router.get('/test', (req, res) => {

})





module.exports = router