const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/hello', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
