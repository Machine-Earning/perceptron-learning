// file for public scripts


let inputs = document.getElementsByName('input')

for (let input of inputs) {
    input.onmouseover = function () {
        input.checked = true
    }
}