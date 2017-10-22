const api = require('./api.js')
const $ = require('jquery')

const user = api.getUsers()

$.each(user, function(index, user) {
  $(document.body).append("<p>name: " + user.name + "</p>")
  $(document.body).append("<p>age: " + user.age + "</p>")
})
