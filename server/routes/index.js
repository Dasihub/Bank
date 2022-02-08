const express = require('express')

const app = express()

app.use('/api', require('./AuthRouter'))
app.use('/api', require('./BankRouter'))

module.exports = app