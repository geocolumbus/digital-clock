const font6x8 = require("./font6x8")
const font12x16 = require("./font12x16")
const font1 = font6x8.getFont()
const font2 = font12x16.getFont()

const _screen = function (_node, _width, _height) {
    return {
        node: _node ? _node : document.createElement("<div>"),
        width: _width ? _width : 32,
        height: _height ? _height : 16,
        grid: [],
        domElements: [],
        init: function () {
            this.clearGrid()
            this.clearDomElements()
            this.clearNode()
        },
        clearGrid: function () {
            for (let row = 0; row < this.height; row++) {
                for (let col = 0; col < this.width; col++) {
                    if (this.grid[row]) {
                        this.grid[row][col] = 0
                    } else {
                        this.grid[row] = [0]
                    }
                }
            }
        },
        clearDomElements: function () {
            for (let row = 0; row < this.height; row++) {
                for (let col = 0; col < this.width; col++) {
                    if (this.domElements[row]) {
                        this.domElements[row][col] = null
                    } else {
                        this.domElements[row] = [null]
                    }
                }
            }
        },
        clearNode: function () {
            this.node.style.border = "2px solid gray"
            this.node.style.overflow = "hidden"
            this.node.style.width = `${this.width * 10 + 2}px`
            this.node.style.height = `${this.height * 10 + 2}px`
            this.node.style.padding = "0"
            this.node.style.backgroundColor = "black"
            this.node.style.borderRadius = "3px"
            this.node.style.position = "relative"
            while (this.node.firstChild) {
                this.node.removeChild(this.node.firstChild)
            }
        },
        toString: function () {
            let ret = ""
            for (let row = 0; row < this.height; row++) {
                ret = ret ? ret + "\n" : ret
                for (let col = 0; col < this.width; col++) {
                    ret += this.grid[row] ? this.grid[row][col] === 1 ? "1 " : "0 " : "0 "
                }
            }
            return ret
        },
        setPixel: function (row, col) {
            if (row < this.height && col < this.width) {
                this.grid[row][col] = 1
            }
        },
        resetPixel: function (row, col) {
            if (row < this.height && col < this.width) {
                this.grid[row][col] = 0
            }
        },
        getPixel: function (row, col) {
            if (row < this.height && col < this.width) {
                return this.grid[row][col]
            }
        },
        drawLetter: function (letter, letterRow, letterCol, shouldErase, fontSize) {
            fontSize = fontSize ? fontSize : 1
            const font = fontSize === 1 ? font1 : font2
            const rowSpacer = fontSize === 1 ? 10 : 20
            const colSpacer = fontSize === 1 ? 6 : 12
            const bitPattern = font[letter.charCodeAt(0)]
            for (let bitPatternRow = 0; bitPatternRow < bitPattern.length; bitPatternRow++) {
                for (let bitPatternCol = 0; bitPatternCol < bitPattern[0].length; bitPatternCol++) {
                    if (bitPattern[bitPatternRow].charAt(bitPatternCol) === "1") {
                        if (shouldErase) {
                            this.resetPixel(bitPatternRow + letterRow * rowSpacer + 2, bitPatternCol + letterCol * colSpacer)
                        } else {
                            this.setPixel(bitPatternRow + letterRow * rowSpacer + 2, bitPatternCol + letterCol * colSpacer)
                        }
                    }
                }
            }
        },
        drawWord: function (word, wordRow, shouldErase, fontSize) {
            for (let c = 0; c < word.length; c++) {
                this.drawLetter(word.charAt(c), wordRow, c, shouldErase, fontSize)
            }
        },
        createDOMPixel: function (row, col) {
            let pixel = document.createElement("div")
            pixel.className += "pixel"
            pixel.style.width = "7px"
            pixel.style.height = "7px"
            pixel.style.borderRadius = "3.5px"
            pixel.style.position = "absolute"
            pixel.style.top = `${row * 10 + 1.5}px`
            pixel.style.left = `${col * 10 + 1.5}px`
            pixel.style.backgroundColor = "blue"
            return pixel
        },
        drawToDom: function () {
            for (let row = 0; row < this.height; row++) {
                for (let col = 0; col < this.width; col++) {
                    if (this.grid[row][col] && !this.domElements[row][col]) {
                        this.domElements[row][col] = this.createDOMPixel(row, col)
                        this.node.appendChild(this.domElements[row][col])
                    } else if (!this.grid[row][col] && this.domElements[row][col]) {
                        this.domElements[row][col].remove()
                        this.domElements[row][col] = null
                    }
                }
            }
        }
    }
}

exports.screen = _screen
