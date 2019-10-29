const repository = require('../repository/aluno.repository')

module.exports = (app) => {

    app.post('/aluno', (req, res) => {
        let resultPromise = repository.salvarUsuario(req.body)
        resultPromise.then(
            res.json({})
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })

    app.get('/aluno/:usuario/:senha', (req, res) => {
        let resultPromise = repository.login(req.param.usuario, req.param.senha)
        resultPromise.then(
            res.json({})
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })
}