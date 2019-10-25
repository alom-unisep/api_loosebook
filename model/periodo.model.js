const mongoose = require('mongoose')

const periodoSchema = mongoose.Schema({
    ano : Number,
    semestre : Number, //1º ou 2º semestre
    etapa : String //G1 ou G2
})

module.exports = mongoose.model('Periodo', periodoSchema)