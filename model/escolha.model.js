const mongoose = require('mongoose')
const SchemaTypes = mongoose.Schema.Types

const escolhaSchema = mongoose.Schema({
    livro : {
        type : SchemaTypes.ObjectId, 
        ref : 'Livro'
    },
    aluno : {
        type : SchemaTypes.ObjectId,
        ref : 'Aluno'
    },
    periodo : {
        type : SchemaTypes.ObjectId,
        ref : 'Periodo'
    }
})

module.exports = mongoose.model('Escolha', escolhaSchema)