// file for helper functions
const fs = require('fs')

module.exports.populateArray = (array, rowNum, colNum, val) => {
    for (let i = 0; i < rowNum; ++i) {
        // array[i] = []; // Initialize inner array
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

module.exports.vec2matrix = (array) => {
    let res = new Array(array.length)
    // let res = []
    for (let i = 0; i < array.length; ++i) {
        // let tmp = []
        res[i] = [array[i]]
    }
    return res
}


module.exports.saveDataset = (obj) => {
    let jsonContent = JSON.stringify(obj)

    fs.writeFileSync('./sources/dataset.json', jsonContent);
    console.log('data saved to json')
    return

}


module.exports.readDataset = () => {
    let data = fs.readFileSync('./sources/dataset.json')
    jsonParsed = JSON.parse(data);
    // console.log(jsonParsed.dataset)
    return jsonParsed
}