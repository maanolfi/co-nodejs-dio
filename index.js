const express = require('express')
const bodyParser = require('body-parser')

const usersRouter = require('./routes/users')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

usersRouter(app)

app.get('/', (req, res) => {
    res.send('Api rodando ')
})

app.listen(port, () => {
    console.log(`Express rodando na porta ${port}`)
})