const {Router} = require('express')

const posts = Router()

posts.get('/test', (req, res) => {
    res.json('This is a post')
})

module.exports = posts