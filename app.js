// npm - global command, comes with  node
// npm --version

// local dependency - use it only in this particula project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)
// uninstall = sacarlo del package.json y correr npm install

//nodemon = npm run dev

var _ = require('lodash')

var items = [1,[2,[3,4]]]
var newItems = _.flattenDeep(items)
console.log(newItems)
console.log('hello')

