const mongoose = require('mongoose')

const alunoSchema = mongoose.Schema({
    usuario : String,
    senha : String,
    email : String,
    nome : String,
    curso : String,
    semetre : Number
})

module.exports = mongoose.model('Aluno', alunoSchema)