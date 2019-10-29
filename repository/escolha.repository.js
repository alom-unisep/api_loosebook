const dao = require('../dao/escolha.dao')

exports.salvarEscolha = async (escolhaData) => {
    let result = await dao.salvarUsuario(escolhaData)
    return result
}

exports.listarEscolhasPorPeriodo = async (periodo) => {
    let result = await dao.listarEscolhasPorPeriodo(periodo)
    return result
}
