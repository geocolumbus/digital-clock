define(function (require) {
    const letter8x6 = require("./letter8x6")
    const color = "lightgreen"

    const getTime = function () {
        const d = new Date()
        let hours = d.getHours()
        let minutes = d.getMinutes()
        let ampm = hours > 12 ? "pm" : "am"
        hours = hours > 12 ? hours - 12 : hours
        minutes = minutes < 10 ? "0" + minutes : minutes
        hours = hours < 10 ? " " + hours : hours
        return `${hours}:${minutes}${ampm}`
    }

    const main = function() {
        const frame = document.getElementsByClassName("frame")[0]
        let temp = "36" + String.fromCharCode(248) + "F"
        let time = getTime()
        frame.appendChild(letter8x6.createWordNode(`  ${time}  `, color))
        frame.appendChild(letter8x6.createWordNode(temp + " Cloudy", color))
        setInterval(function () {
            if (time !== getTime()) {
                time = getTime()
                frame.childNodes[0].remove()
                frame.prepend(letter8x6.createWordNode(`  ${time}  `, color))
            }
        }, 1000)
    }

    main()
})
