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