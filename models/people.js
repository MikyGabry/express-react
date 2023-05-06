const mongoose = require('./connection')

const PeopleShema = new mongoose.Schema({
    name: String,
    image: String,
    title: String
})

const People = mongoose.model('People', PeopleShema)

module.exports = People;