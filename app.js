//CommonJS, every file is module (by default)
//Modules - Encapsulated code (only share the minimum)


const names = require('./4-names')
const sayHi = require('./5-utils')


sayHi('susan')
sayHi(names.name)
sayHi(names.surname)
