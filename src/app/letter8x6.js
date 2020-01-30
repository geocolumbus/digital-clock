define(function (require) {

    const font8x6 = require("./font8x6")
    const font = font8x6.font()

    _displayFont = function (asciiCode) {
        const letter = document.createElement("div")
        letter.style.width = "50px"
        letter.style.height = "80px"
        letter.style.position = "relative"
        letter.style.float = "left"
        letter.style.margin = "0 10px 20px 0"
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                if (font[asciiCode][j].charAt(i + 1) === "1") {
                    let pixel = document.createElement("div")
                    pixel.className += "pixel"
                    pixel.style.width = "7px"
                    pixel.style.height = "7px"
                    pixel.style.position = "absolute"
                    pixel.style.top = `${j * 10 + 1.5}px`
                    pixel.style.left = `${i * 10 + 1.5}px`
                    pixel.style.backgroundColor = "red"
                    letter.appendChild(pixel)
                }
            }
        }
        return letter
    }
    return {
        displayFont: _displayFont
    }
})
