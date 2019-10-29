const dao = require('../dao/periodo.dao')

exports.salvarPeriodo = async (periodoData) => {
    let result = await dao.salvarPeriodo(periodoData)
    return result
}

exports.listarPeriodos = async () => {
    let result = await dao.listarPeriodos()
    return result
}

exports.atualizarPeriodo = async (periodoData) => {
    let result = await dao.atualizarPeriodo(periodoData)
    return result
}