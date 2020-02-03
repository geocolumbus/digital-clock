const Screen = require("./screen")
const screenNode = document.createElement("div")
document.getElementsByTagName("body")[0].appendChild(screenNode)
const width = 32
const height = 16
const screen = Screen.screen(screenNode, width, height)
screen.init()
setInterval(() => {
    screen.drawToDom()
}, 10)

let colBar = 0
setInterval(function () {
    for (let row = 0; row < height; row++) {
        if (colBar > 0) {
            screen.resetPixel(row, colBar - 1)
        }
        if (colBar < width) {
            screen.setPixel(row, colBar)
        }
    }
    colBar++
    colBar = colBar > width ? 0 : colBar
}, 25)

let rowBar = 0
setInterval(function () {
    for (let col = 0; col < width; col++) {
        if (rowBar > 0) {
            screen.resetPixel(rowBar-1, col)
        }
        if (rowBar < height) {
            screen.setPixel(rowBar, col)
        }
    }
    rowBar++
    rowBar = rowBar > height ? 0 : rowBar
}, 26)

