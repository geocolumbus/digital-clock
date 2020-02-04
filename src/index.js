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

let displayCounter = 0

function incrementDisplay () {
  switch (displayCounter) {
    case 0:
      screen.drawWord(" Rain", 0, true, 2)
      screen.drawWord("12:34", 0, false, 2)
      break
    case 1:
      screen.drawWord("12:34", 0, true, 2)
      screen.drawWord(" 52" + String.fromCharCode(248) + "F", 0, false, 2)
      break
    case 2:
      screen.drawWord(" 52" + String.fromCharCode(248) + "F", 0, true, 2)
      screen.drawWord(" Rain", 0, false, 2)
      break
  }
  displayCounter = displayCounter < 3 ? displayCounter + 1 : 0
}

setInterval(incrementDisplay, 3000)
