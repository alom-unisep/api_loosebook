const mongoose = require('mongoose')

exports.connect = async () => {
    return await mongoose.connect('mongodb://localhost:27017/looseBook')
}