var readFileSync = require('fs').readFileSync
var getOrientation = require('./')
var human = require('./human')
var opts = require('minimist')(process.argv.slice(2))

process.argv.slice(2).forEach(function (file) {
  var o = getOrientation(readFileSync(file))
  if(o>=0)
    console.log(file, human[o])
})









