const pool = require('../db')
const queries = require('./queries')

const getPosts = (req, res) => {
    pool.query(queries.getPosts, (error, results) => {
        if (error) {
            res.status(400).json('Could not complete the request')
        }
        res.status(200).json(results.rows)
    })
}

const getPostById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getPostById, [id], (error, results) => {
        if (error) {
            res.status(404).json({
                error: {message: (`Post with ID ${id} not found`)}
            })
        }
        res.status(200).json(results.rows)
    })
}

const addPost = (req, res) => {
    const {title, description, img, userid} = req.body

    pool.query(queries.addPost, [title, description, img, userid], (error, results) => {
        if (error) {
            res.status(404).json({
                error: {message: ('Could not add the post')}
            })
        }
        res.status(200).json('Success! Post added!')
    })
}

modules.export = {
    getPosts,
    getPostById,
    addPost
}