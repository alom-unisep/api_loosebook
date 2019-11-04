const repository = require('../repository/aluno.repository')

module.exports = (app) => {

    app.post('/aluno/salvaAluno', (req, res) => {
        let resultPromise = repository.salvarUsuario(req.body)
        resultPromise.then(
            res.json({})
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })

    app.post('/aluno/buscaAluno', (req, res) => {
        let resultPromise = repository.login(req.body)
        resultPromise.then(
            res.json({})
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })
}