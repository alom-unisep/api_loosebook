const Livro = require('../model/livro.model')
const db = require('../db/database')

exports.salvarLivro = async (livroData) => {
    let con = await db.connect()
    let livro = new Livro(livroData)
    let result = await livro.save()
    con.disconnect()
    return result
}

exports.listarLivrosDoPeriodo = async (periodo) => {
    let con = await db.connect()
    let result = await Livro.find({
        periodo : periodo
    })
    con.disconnect()
    return result
}

exports.atualizarLivro = async (livroData) => {
    let con = await db.connect()
    let result = await Livro.updateOne(
        { _id : livroData._id}, livroData)
    con.disconnect()
    return result
}

exports.excluirLivro = async (livroData) => {
    let con = await db.connect()
    let result = await Livro.deleteOne(livroData)
    con.disconnect()
    return result
}