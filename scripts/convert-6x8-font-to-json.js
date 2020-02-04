"use strict"

const fs = require("fs")

const file = "font-5x8"
const source = `../fonts/raster-fonts/${file}.c`
const sink = `../src/json/${file}.json`

const sourceFileLines = fs.readFileSync(source, {encoding: "UTF-8"}).toString().split("\n")

let asciiCode = null
let lineCounter = 0
let font = []
sourceFileLines.forEach(line => {
    if (line.includes("* code=")) {
        const asciiMatch = line.match(/code=([0-9]*)\s?,/)
        if (asciiMatch && asciiMatch.length > 0) {
            asciiCode = asciiMatch[1]
            lineCounter = 0
            font[asciiCode] = []
        }
    }
    if (lineCounter === 10) {
        asciiCode = null
        lineCounter = 0
    }
    if (asciiCode && lineCounter > 1) {
        font[asciiCode].push(line.match(/\*\s([01]*)\s\*/)[1].replace(/0/g," "))
    }
    if (asciiCode) {
        lineCounter = lineCounter + 1
    }
})
fs.writeFileSync(sink,JSON.stringify(font,null,2))

