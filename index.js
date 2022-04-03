const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/routes')

const port = 3000
const app = express()

app.use(express.static('public'))
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(router)

app.listen(port, () => {
  console.log({ port })
})
