const bodyParser = require('body-parser')
const pdf = require('html-pdf')

const pdfTemplate = require('../templates/templateRelatorio')


module.exports = (app) => {
    app.post('/create-pdf', (req, res) => {
        //abaixo pega os dados enviados pelo frontend (state) através de req.body
        pdf.create(pdfTemplate(req.body), {}).toFile('listaAlunos.pdf', (err) => {
            if (err) {
                res.send(Promise.reject());
            }
            res.send(Promise.resolve());
        })
    })

    app.get('/fetch-pdf', (req, res) => {
        res.sendFile(`${__dirname}/listaAlunos.pdf`)
    })
}