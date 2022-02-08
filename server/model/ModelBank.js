const {model, Schema} = require('mongoose')

const schema = new Schema({
    amount: {type: String, require: true}
})

module.exports = model('Bank', schema)