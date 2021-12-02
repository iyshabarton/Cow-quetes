index.cjs
const cowsay = require('cowsay');
const newInfo = require('./information')

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));
