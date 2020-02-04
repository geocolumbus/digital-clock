const Screen = require("./screen")
const screenNode = document.createElement("div")
document.getElementsByTagName("body")[0].appendChild(screenNode)
const width = 64
const height = 32
const screen = Screen.screen(screenNode, width, height)
screen.init()
setInterval(() => {
    screen.drawToDom()
}, 50)

setTimeout(() => {
    screen.drawWord("George", 0)
}, 1000)
setTimeout(() => {
    screen.drawWord("George", 0, true)
    screen.drawWord("Campbell", 0)
}, 2000)
setTimeout(() => {
    screen.drawWord("Campbell", 0, true)
    screen.drawWord("done", 0)
}, 3000)
