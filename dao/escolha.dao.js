const Escolha = require('../model/escolha.model')
const db = require('../db/database')

exports.salvarEscolha = async (escolhaData) => {
    let con = await db.connect()
    let escolha = new Escolha(escolhaData)
    let result = await escolha.save()
    con.disconnect()
    return result
}

exports.listarEscolhasPorPeriodo = async (periodo) => {
    let con = await db.connect()
    let result = await Escolha.find().populate({
        path: 'periodo',
        match: {
            ano : periodo.ano,
            semestre : periodo.semestre,
            etapa : periodo.etapa
        }
    }).populate('livro').populate('aluno').exec()

    db.disconnect()

    return result.filter(e => e.periodo != null)
}