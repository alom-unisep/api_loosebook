const wsEscolha = require('../ws/escolha.ws')
const wsLivro = require('../ws/livro.ws')
const wsAluno = require('../ws/aluno.ws')
const wsPeriodo = require('../ws/periodo.ws')
const wsRelatorio = require('../ws/relatorio.ws')

module.exports = (app) => {
    wsEscolha(app),
    wsLivro(app),
    wsAluno(app),
    wsPeriodo(app),
    wsRelatorio(app)
}