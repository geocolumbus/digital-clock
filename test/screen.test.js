const Screen = require("../src/screen.js")

test("Screen defaults to 32 x 16 with all zeros", () => {
    const screen = new Screen.screen()
    screen.init()
    const expectedRows = 16
    const expectedColumns = 32

    expect(screen.width).toEqual(expectedColumns)
    expect(screen.height).toEqual(expectedRows)

    let expectedToString = ""
    let rowString
    for (let row = 0; row < expectedRows; row++) {
        rowString = ""
        for (let col = 0; col < expectedColumns; col++) {
            rowString += "0 "
        }
        if (row !== expectedRows-1) {
            rowString+="\n"
        }
        expectedToString+=rowString
    }

    expect(screen.toString()).toEqual(expectedToString)
})

test("Set and get a screen pixel", ()=>{
    const screen = new Screen.screen()
    screen.init()

    expect(screen.getPixel(5,23)).toEqual(0)
    screen.setPixel(5,23)
    expect(screen.getPixel(5,23)).toEqual(1)
    screen.resetPixel(5,23)
    expect(screen.getPixel(5,23)).toEqual(0)
})
