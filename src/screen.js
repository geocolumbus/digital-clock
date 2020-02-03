const _screen = function (_width, _height) {
    return {
        width: _width ? _width : 32,
        height: _height ? _height : 16,
        grid: [],
        buffer: [],
        domElements: [],
        init: function () {
            this.grid = this.clear(this.grid)
            this.buffer = this.clear(this.buffer)
            this.domElements = this.clearDomElements(this.domElements)
        },
        clear: function (screenArray) {
            for (let row = 0; row < this.height; row++) {
                for (let col = 0; col < this.width; col++) {
                    if (screenArray[row]) {
                        screenArray[row][col] = 0
                    } else {
                        screenArray[row] = [0]
                    }
                }
            }
            return screenArray
        },
        clearDomElements: function (domElements) {
            for (let row = 0; row < this.height; row++) {
                for (let col = 0; col < this.width; col++) {
                    domElements[row][col] = null
                }
            }
            return domElements
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
            this.grid[row][col] = 1
        },
        resetPixel: function (row, col) {
            this.grid[row][col] = 0
        },
        getPixel: function (row, col) {
            return this.grid[row][col]
        },
        drawToDom: function () {
            for (let row = 0; row < this.height; row++) {
                for (let col = 0; col < this.height; coll++) {
                    if (this.grid[row][col] !== this.buffer[row][col]) {
                        if (this.grid[row][col] === 1) {
                            // create a pixel and add it to the list
                            // put a pixel at that point in the array
                        } else {
                            // remove the pixel and add a delete to the list
                            // null that point in the array
                        }
                    }
                }
            }
        }
    }
}

exports.screen = _screen
