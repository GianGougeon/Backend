const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola yarn')
})

console.log("hola")

app.listen(3000)