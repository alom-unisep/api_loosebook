const Aluno = require('../model/aluno.model')
const db = require('../db/database')

exports.salvarUsuario = async (alunoData) => {
    let con = await db.connect()
    let aluno = new Aluno(alunoData)
    let result = await aluno.save()
    con.disconnect()
    return result
}

exports.login = async (usuarioData) => {
    let con = await db.connect()
    let result = await Match.find({
        usuario : usuarioData.usuario,
        senha : usuarioData.senha
    })
    con.disconnect()
    return result
}