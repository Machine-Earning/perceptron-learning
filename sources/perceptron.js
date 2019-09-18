// perceptron.js for perceptron object
const math = require('mathjs')
// const data = require('./data')
const populateArray = require('./utils').populateArray
const vec2matrix = require('./utils').vec2matrix
const parseOutput = require('./utils').parseOutput

class Perceptron {
    // constructor for the NN
    constructor() { //takes in input matrix p and output a

        // initializing input
        // this.input = input

        // initializing  output
        // this.target = target


        // initializing target output
        this.output = vec2matrix(new Array(7).fill(0))
        populateArray(this.output, 7, 1, 0)


        this.weights = new Array(7)
        for (let i = 0; i < this.weights.length; ++i) {
            this.weights[i] = new Array(63).fill(0)
        }
        // populateArray(this.weights, 7, 63, Math.random())
        populateArray(this.weights, 7, 63, 0)


        this.biases = vec2matrix(new Array(7).fill(0))
        // populateArray(this.biases, 7, 1, Math.random())
        populateArray(this.biases, 7, 1, 0)
    }

    // Loss function
    error(target, output) {
        // let e = vec2matrix(new Array(7))
        // for (let i = 0; i < target.length; ++i) {
        //     e[i] = target[i] - output[i]
        // }
        let e = math.subtract(target, output)
        return e
    }

    // activation function
    activation(n, rowSize, colSize) {
        let res = new Array(rowSize)
        for (let i = 0; i < rowSize; ++i) {
            res[i] = new Array(colSize)
            for (let j = 0; j < colSize; ++j) {

                if (n[i][j] > 0) res[i][j] = 1
                else if (n[i][j] < 0) res[i][j] = -1
                else res[i][j] = 0

            }
            // add a middle ground
        }
        return res
    }




    // training part 1
    feedForward(input) {
        input = vec2matrix(input)
        this.output = this.activation(math.add(math.multiply(this.weights, input), this.biases), 7, 1)
        return this.output
    }




    // training part 2
    backPropagation(input, target, output) {

        target = vec2matrix(target)
        input = vec2matrix(input)

        let e = this.error(target, output)

        console.log('error');
        console.log(e)

        let transposed = math.transpose(input)
        // let transposed = vec2matrix(input)

        // console.log('input')
        // console.log(input)
        // console.log('transposed')
        // console.log(transposed)

        this.weights = math.add(this.weights, math.multiply(e, transposed))
        this.biases = math.add(this.biases, e)
    }

    // training function 
    train(epochNum, dataset) {
        // dataset is an array of data objects pair
        if (dataset.length === 0) {
            console.log('Emptry training set')
            return
        }

        for (let e = 0; e < epochNum; ++e) {

            // display the epoch number
            console.log(`\nEpoch # ${e}\n`)

            for (let i = 0; i < dataset.length; ++i) {
                // for (let data of dataset) {
                // propagate the data through the network
                this.feedForward(dataset[i].input)

                // update the weights in the network
                this.backPropagation(dataset[i].input, dataset[i].target, this.output)
                // }
            }
        }

        console.log('Weights')
        console.log(this.weights)
        console.log('Biases')
        console.log(this.biases)

    }


    predict(input) {
        // console.log('input:')
        // console.log(input)
        console.log('output:')
        let output = this.feedForward(input)
        console.log(output)
        return parseOutput(output)
    }


}


module.exports = Perceptron