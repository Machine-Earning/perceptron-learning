// perceptron.js for perceptron object
const math = require('mathjs')
const data = require('./data')
const populateArray = require('./utils')

class Perceptron {


    // constructor for the NN
    constructor() { //takes in input matrix p and output a

        // initializing input
        // this.input = input

        // initializing  output
        // this.target = target


        // initializing target output
        this.output = []
        populateArray(this.output, 7, 1, 0)

        this.weights = []
        populateArray(this.weights, 7, 63, Math.random())


        this.biases = []
        populateArray(this.biases, 7, 1, Math.random())
    }

    // Loss function
    error(target, output) {
        e = []
        for (let i = 0; i < target.length; ++i) {
            e[i] = target[i] - output[i]
        }
        return e
    }

    // activation function
    hardLims(n) {
        res = []
        for (let i = 0; i < n.length; ++i) {
            res[i] = (n[i] >= 0) ? 1 : -1
        }
        return res
    }




    // training part 1
    feedForward(input) {
        this.output = this.hardLims(math.dot(input, this.weights) + this.biases)
        return this.output
    }




    // training part 2
    backPropagation(input, target, output) {
        let e = this.error(target, output)

        console.log(`error = ${e}\n`);

        this.weights = math.add(this.weights, math.dot(e, math.transpose(input)))
        this.biases = math.add(this.biases, e)
    }

    // training function 
    train(epochNum, dataset) {
        // dataset is an array of data objects pair

        for (let e = 1; e <= epochNum; ++e) {
            // display the epooch number
            console.log(`Epoch # ${e}\n`)

            // for (let data of dataset) {
            // propagate the data through the network
            this.feedForward(data[e].input)

            // update the weights in the network
            this.backPropagation(data[e].input, data[e].target, this.output)
            // }
        }

    }


    predict(input) {
        console.log(`Input: ${input}\n`)
        console.log(`Output: ${this.feedForward(input)}\n`)
    }


}


module.exports = Perceptron