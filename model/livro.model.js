const mongoose = require('mongoose')
const SchemaTypes = mongoose.Schema.Types

const livroSchema = mongoose.Schema({
    titulo : String,
    subtitulo : String,
    autor : String,
    editora : String,
    paginas : Number,
    vagas : Number,
    imagem : String,
    professor : String,
    descricao : String,
    idioma : Number, /*portugues: 1 -> inglês: 2*/
    periodo : {
        type : SchemaTypes.ObjectId, 
        ref : 'Periodo'
    },
})

module.exports = mongoose.model('Livro', livroSchema)