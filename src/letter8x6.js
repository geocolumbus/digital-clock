const font8x6 = require("./font8x6")
const font = font8x6.font()

const _createLetterNode = function (asciiCode, color) {
    const letter = document.createElement("div")
    letter.style.width = "60px"
    letter.style.height = "80px"
    letter.style.position = "relative"
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 8; j++) {
            if (font[asciiCode][j].charAt(i + 1) === "1") {
                let pixel = document.createElement("div")
                pixel.className += "pixel"
                pixel.style.width = "7px"
                pixel.style.height = "7px"
                pixel.style.borderRadius = "3.5px"
                pixel.style.position = "absolute"
                pixel.style.top = `${j * 10 + 1.5}px`
                pixel.style.left = `${i * 10 + 1.5}px`
                pixel.style.backgroundColor = color ? color : "red"
                letter.appendChild(pixel)
            }
        }
    }
    return letter
}

const _createWordNode = function (word, color) {
    const wordNode = document.createElement("div")
    wordNode.style.height = "90px"
    wordNode.style.width = `${word.length * 60}px`
    wordNode.style.position = "relative"
    wordNode.style.backgroundColor = "black"
    for (let i = 0; i < word.length; i++) {
        const letter = _createLetterNode(word.charCodeAt(i), color)
        letter.style.float = "left"
        wordNode.appendChild(letter)
    }
    return wordNode
}

exports.createLetterNode = _createLetterNode
exports.createWordNode = _createWordNode

