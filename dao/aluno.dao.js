const Aluno = require('../model/aluno.model')
const db = require('../db/database')

exports.salvarUsuario = async (alunoData) => {
    let con = db.connect()
    let aluno = new Aluno(alunoData)
    let result = await aluno.save()
    con.disconnect()
    return result
}

exports.login = async (usuario, senha) => {
    let con = db.connect()
    let result = await Match.find({
        usuario : usuario,
        senha : senha
    })
    con.disconnect()
    return result
}