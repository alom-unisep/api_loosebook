const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes/routes')

app.use(cors())
app.use(express.json())

routes(app)

app.listen(8080, () => {
    console.log('Servidor ativo!')
})