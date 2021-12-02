const cowsay = require('cowsay');
const newInfo = require('./information')

console.log(cowsay.say({
    text : `What does the cow say ${newInfo.info.name} from ${newInfo.info.campus}`,
    e : "oO",
    T : "U "
}));
