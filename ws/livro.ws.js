const repository = require('../repository/livro.repository')

module.exports = (app) => {

    app.post('/livro', (req, res) => {
        let resultPromise = repository.salvarLivro(req.body)
        resultPromise.then(
            res.json({})
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })

    app.get('/livro/:periodo', (req, res) => {
        let resultPromise = repository.listarLivrosDoPeriodo(req.param.periodo)
        resultPromise.then(
            res.json()
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })

    app.put('/livro', (req, res) => {
        let resultPromise = repository.atualizarLivro(req.body)
        resultPromise.then(
            res.json()
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })

    app.delete('/livro', (req, res) => {
        let resultPromise = repository.excluirLivro(req.body)
        resultPromise.then(
            res.json()
        ).catch(e => {
            res.status(500).send(e.message)
        })
    })
}