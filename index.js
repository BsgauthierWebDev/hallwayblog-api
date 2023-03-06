const express = require('express')
const app = express()
const port = 8800
const postRoutes = require('./routes/posts')

app.use(express.json())
app.use('/api/posts', postRoutes)

app.get('/', (req, res) => {
    res.json('Welcome to Hallwayblog API!!')
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})