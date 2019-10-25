const Periodo = require('../model/periodo.model')
const db = require('../db/database')

exports.salvarPeriodo = async (periodo) => {
    let con = db.connect()
    let periodo = new Periodo(escolha)
    let result = await periodo.save()
    con.disconnect()
    return result
}

exports.listarPeriodo = async (periodoData) => {
    let con = db.connect()
    let result = await Periodo.findOne(
        { _id : periodoData._id }
    )
    con.disconnect()
    return result
}

exports.atualizarPeriodo = async (periodoData) => {
    let con = db.connect()
    let result = await Periodo.updateOne(
        { _id : periodoData._id}, periodoData)
    con.disconnect()
    return result
}