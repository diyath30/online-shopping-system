const express = require('express')
app = express()
const port = 80

app.get('/', (req, res) => {
  console.log('Hi')
  res.send("It's a home page")
})

app.listen(port, () => {
  console.log('app started')
})