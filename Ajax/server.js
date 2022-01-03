const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//* instanciar o midleware
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/test', (req, res) => res.send('OK'))
app.listen(8080, () => console.log('Executando.....'))