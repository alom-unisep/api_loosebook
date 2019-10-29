const repository = require('../repository/periodo.repository')

module.exports = (app) => {

    app.post('/periodo', (req, res) => {
        let resultPromise = repository.salvarPeriodo(req.body)
        resultPromise.then(
            res.json({})
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })

    app.get('/periodo', (req, res) => {
        let resultPromise = repository.listarPeriodos()
        resultPromise.then(
            res.json({})
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })

    app.put('/periodo', (req, res) => {
        let resultPromise = repository.atualizarPeriodo(req.body)
        resultPromise.then(
            res.json({})
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })
}