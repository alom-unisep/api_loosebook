const Periodo = require('../model/periodo.model')
const db = require('../db/database')

exports.salvarPeriodo = async (periodoData) => {
    let con = await db.connect()
    let periodo = new Periodo(periodoData)
    let result = await periodo.save()
    con.disconnect()
    return result
}

exports.listarPeriodos = async () => {
    let con = await db.connect()
    let result = await Periodo.find()
    con.disconnect()
    return result
}

exports.atualizarPeriodo = async (periodoData) => {
    let con = await db.connect()
    let result = await Periodo.updateOne(
        { _id : periodoData._id}, periodoData)
    con.disconnect()
    return result
}