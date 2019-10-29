const dao = require('../dao/aluno.dao')

exports.salvarUsuario = async (usuarioData) => {
    let result = await dao.salvarUsuario(usuarioData)
    return result
}

exports.login = async (usuarioData) => {
    let result = await dao.login(usuarioData)
    return result
}