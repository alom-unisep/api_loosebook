/*
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
*/
const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes/routes')

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const port = process.env.PORT || 8080;

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://techraptors.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:5000',
    issuer: 'https://techraptors.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);
app.use(cors())
app.use(express.json())

routes(app)

app.get('/testeAutorizacao', function (req, res) {
    res.send('Autorizado!');
    console.log('Servidor ativado!');
});

app.listen(port, () => {
    console.log('Servidor ativo!')
})