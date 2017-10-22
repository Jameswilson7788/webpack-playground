const $ = require('jquery')

const baseUrl = 'http://api.fixer.io/latest?base='

module.exports = function (current, callback) {
  $.getJSON(baseUrl + current, function(fixable) {
    callback(fixable)
  })
}
