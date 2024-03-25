const names = require('./4-name.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavor.js')
console.log(data)
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

require('./7-mind-generate.js')