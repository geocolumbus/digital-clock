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

screen.drawWord("12:34",0.3,false,2)
