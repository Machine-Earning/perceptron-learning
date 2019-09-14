// data.js for the data class 

class Data {
    constructor(input, target) {

        // input is 9x7 array 
        this.input = input;

        // array is 7x1 array
        this.target = target;
    }

    printInput() {
        console.log('[')
        for (let i = 0; i < this.input.length; ++i) {
            console.log(`${this.input[i]}, `)
            if (i % 7 === 6) {
                console.log('\n')
            }
        }

        console.log(']')
        // return this.input

    }

    printTarget() {
        console.log('[')
        for (let i = 0; i < this.target.length; ++i) {
            console.log(`${this.target[i]}, `)

        }

        console.log(']')
        // return this.target
    }

}