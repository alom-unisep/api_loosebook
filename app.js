const express = require('express')
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const cors = require('cors')
const app = express()
const routes = require('./routes/routes')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app)

app.listen(8080, () => {
    console.log('Servidor ativo!')
})