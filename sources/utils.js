// file for helper functions


module.exports.populateArray = (array, rowNum, colNum, val) => {
    for (let i = 0; i < rowNum; ++i) {
        array[i] = []; // Initialize inner array
        for (let j = 0; j < colNum; ++j) {
            // populating the array with random number from 0 - 1
            array[i][j] = val;
        }
    }
}


module.exports.parseInput = (rawInput) => {
    input = new Array(63).fill(0)
    for (let index of rawInput) {
        input[parseInt(index, 10)] = 1;
    }
    return input
}


module.exports.parseTarget = (rawTarget) => {
    target = new Array(7).fill(0)
    target[parseInt(rawTarget, 10)] = 1;

    return target
}