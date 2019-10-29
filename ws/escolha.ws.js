const repository = require('../repository/escolha.repository')

module.exports = (app) => {

    app.post('/escolha', (req, res) => {
        let resultPromise = repository.salvarEscolha(req.body)
        resultPromise.then(
            res.json({})
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })

    app.get('/escolha', (req, res) => {
        let resultPromise = repository.listarEscolhasPorPeriodo(req.body)
        resultPromise.then(
            res.json()
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })
}