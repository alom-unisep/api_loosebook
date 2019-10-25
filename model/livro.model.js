const mongoose = require('mongoose')
const SchemaTypes = mongoose.Schema.Types

const livroSchema = mongoose.Schema({
    titulo : String,
    autor : String,
    editora : String,
    vagas : Number,
    imagem : String,
    idioma : String,
    periodo : {
        type : SchemaTypes.ObjectId, 
        ref : 'Periodo'
    },
})

module.exports = mongoose.model('Livro', livroSchema)