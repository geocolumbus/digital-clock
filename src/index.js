const Screen = require("./screen")
const screenNode = document.createElement("div")
document.getElementsByTagName("body")[0].appendChild(screenNode)
const width = 64
const height = 16
const screen = Screen.screen(screenNode, width, height)
screen.init()
setInterval(() => {
    screen.drawToDom()
}, 50)

screen.drawWord("12:34",0,false,2)
setInterval(()=>{
    screen.drawWord(" 32"+String.fromCharCode(248)+"F",0,true,2)
    screen.drawWord("12:34",0,false,2)

    setTimeout(()=>{
        screen.drawWord("12:34",0,true,2)
        screen.drawWord(" 32"+String.fromCharCode(248)+"F",0,false,2)
    },3000)
},6000)
