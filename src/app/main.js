define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    const letter8x6 = require('./letter8x6');
    const body = document.getElementsByTagName("body")[0]
    for (let i=0; i<255; i++) {
        body.appendChild(letter8x6.displayFont(i))
    }
});
