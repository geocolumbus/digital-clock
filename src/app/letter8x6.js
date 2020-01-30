define(function (require) {

    const font8x6 = require("./font8x6")
    const font = font8x6.font()

    /**
     * Draw a letter using CSS
     * @param asciiCode
     * @param color
     * @returns {HTMLDivElement}
     * @private
     */
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
                    pixel.style.borderRadius="3.5px"
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

    /**
     * Draw a word using CSS
     * @param word
     * @param color
     * @returns {HTMLDivElement}
     * @private
     */
    const _createWordNode = function (word, color) {
        const wordNode = document.createElement("div")
        wordNode.style.height="90px"
        wordNode.style.width=`${word.length*60}px`
        wordNode.style.position="relative"
        wordNode.style.backgroundColor="black"
        for (let i=0; i<word.length; i++) {
            const letter=_createLetterNode(word.charCodeAt(i), color)
            letter.style.float="left"
            wordNode.appendChild(letter)
        }
        return wordNode
    }

    /**
     * Draw a letter onto a pixel board using Scalable Vector Graphics
     * @param asciiCode
     * @param x
     * @param y
     * @private
     *
     * Works with an SVG tag like this
     *
     * .letter2 {
     *    float: left;
     *    padding: 5px;
     *    viewbox: "0 0 320 160";
     *    preserveaspectratio: "xMidYMid meet";
     * }
     */
    const _drawLetter = function(asciiCode, x, y) {
        const letter2 = document.getElementsByClassName("letter2g")[0];
        console.log(letter2)
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                if (font[asciiCode][j].charAt(i + 1) === "1") {
                    const pixel = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    pixel.setAttribute("cx", i*10+x*10);
                    pixel.setAttribute("cy", j*10+5+y*10);
                    pixel.setAttribute("r", 4);
                    pixel.setAttribute("fill", "red");
                    letter2.appendChild(pixel);
                }
            }
        }
    };

    return {
        createLetterNode: _createLetterNode,
        createWordNode: _createWordNode,
        drawLetter: _drawLetter
    }
})
