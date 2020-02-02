const _screen = function (width, height) {
    return {
        width: width ? width : 32,
        height: height ? height : 16,
        grid: [],
        clear: function () {
            for (let row = 0; row < this.width; row++) {
                for (let col = 0; col < this.height; col++) {
                    this.grid[row] ? this.grid[row][col] = 0 : this.grid[row] = [0]
                }
            }
        },
        toString: function () {
            let ret = ""
            for (let row = 0; row < this.width; row++) {
                ret = ret ? ret + "\n" : ret
                for (let col = 0; col < this.height; col++) {
                    ret += grid[row] ? grid[row][col] === 1 ? "1 " : "0 " : "0 "
                }
            }
            return ret
        }
    }
}

exports.screen = _screen
