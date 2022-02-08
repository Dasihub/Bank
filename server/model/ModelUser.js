const {model, Schema} = require('mongoose')

const schema = new Schema({
    login: {type: String, require: true},
    password: {type: String, require: true}
})

module.exports = model('User', schema)