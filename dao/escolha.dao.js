const Escolha = require('../model/escolha.model')
const db = require('../db/database')

exports.salvarEscolha = async (escolha) => {
    let con = db.connect()
    let escolha = new Escolha(escolha)
    let result = await Escolha.save()
    con.disconnect()
    return result
}

exports.listarEscolhasPorPeriodo = async (periodo) => {
    let con = db.connect()
    let result = await Escolha.find(
        { periodo : {
            ano : periodo.ano,
            semestre : periodo.semestre,
            etapa : periodo.etapa } 
        })
}