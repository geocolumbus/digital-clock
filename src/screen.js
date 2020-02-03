const _screen = function (_width, _height) {
    return {
        width: _width ? _width : 32,
        height: _height ? _height : 16,
        grid: [],
        clear: function () {
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
        toString: function () {
            let ret = ""
            if (this.grid.length === 0) {
                this.clear()
            }
            for (let row = 0; row < this.height; row++) {
                ret = ret ? ret + "\n" : ret
                for (let col = 0; col < this.width; col++) {
                    ret += this.grid[row] ? this.grid[row][col] === 1 ? "1 " : "0 " : "0 "
                }
            }
            return ret
        },
        setPixel: function (row, col) {
            if (this.grid.length === 0) {
                this.clear()
            }
            this.grid[row][col] = 1
        },
        resetPixel: function (row, col) {
            if (this.grid.length ===0) {
                this.clear()
            }
            this.grid[row][col] = 0
        },
        getPixel: function (row, col) {
            if (this.grid.length ===0) {
                this.clear()
            }
            return this.grid[row][col]
        }
    }
}

exports.screen = _screen
