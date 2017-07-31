'use strict'

const express = require('express')
const bodyParser = require('body-parser').json()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('./public'))


app.listen(PORT, function() {
  console.log(`Active port is: ${PORT}`)
})
