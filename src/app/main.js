define(function (require) {
    const letter8x6 = require("./letter8x6")
    const frame = document.getElementsByClassName("frame")[0]
    const d = new Date()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let ampm = hours > 12 ? "pm" : "am"
    hours = hours > 12 ? hours - 12 : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    hours = hours < 10 ? " " + hours : hours
    const time = `${hours}:${minutes}${ampm}`
    const temp = "29" + String.fromCharCode(248) + "F"
    frame.appendChild(letter8x6.createWordNode(`  ${time}  `, "lightblue"))
    frame.appendChild(letter8x6.createWordNode(temp + "  Clear", "lightblue"))

})
