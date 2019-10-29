const dao = require('../dao/livro.dao')

exports.salvarLivro = async (livroData) => {
    let result = await dao.salvarLivro(livroData)
    return result
}

exports.listarLivrosDoPeriodo = async (periodo) => {
    let result = await dao.listarLivrosDoPeriodo(periodo)
    return result
}

exports.atualizarLivro = async (livroData) => {
    let result = await dao.atualizarLivro(livroData)
    return result
}

exports.excluirLivro = async (livroData) => {
    let result = await dao.excluirLivro(livroData)
    return result
}