// perceptron.js for perceptron object
import {
    math
} from 'mathjs'

class Perceptron {


    // constructor for the NN
    constructor(input, target) { //takes in input matrix p and output a

        // initializing input
        this.input = input

        // initializing  output
        this.target = target


        // initializing target output
        this.output = []
        populateArray(this.output, 7, 1, 0)

        this.weights = []
        populateArray(this.weights, 7, 63, Math.random())


        this.biases = []
        populateArray(this.biases, 7, 1, Math.random())
    }

    // training part 1
    feedForward() {
        this.output = this.hardLims(math.dot(this.input, this.weights) + this.biases)
    }




    // training part 2
    backPropagation() {
        let e = this.error(this.target, this.output)
        this.weights = math.add(this.weights, math.dot(e, math.transpose(this.input)))
        this.biases = math.add(this.biases, e)
    }

    train(epochNum) {

        for (let e = 1; e <= epochNum; ++e) {

            // display the epooch number

            // propagate the data through the network
            this.feedForward()

            // update the weights in the network
            this.backPropagation()

            // Display the error

        }

    }


    predict(input) {
        return this.hardLims(math.dot(input, this.weights) + this.biases)
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
}