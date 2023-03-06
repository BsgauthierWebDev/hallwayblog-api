const pool = require('../db')
const queries = require('./queries')

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) {
            res.status(400).json({
                error: {message: 'Cannot complete request'}
            })
        }
        res.status(200).json(results.rows)
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getUserById, (error, results) => {
        if (error) {
            res.status(404).json(`User with ID ${id} not found`)
        }
        res.status(200).json(results.rows)
    })
}

const addUser = (req, res) => {
    const {username, email, password, img} = req.body
    // Check to see if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.status(403).json('Email already in use');
            return;
        }
        res.status(201).json('User added')
    })
}

const updateUsername = (req, res) => {
    const id = parseInt(req.params.id)
    const {username} = req.body.username

    // Check to see if username exists
    pool.query(queries.checkUsernameExists, [username], (error, results) => {
        if (results.rows.length) {
            res.status(403).json('Username already exists');
            return;
        }
        res.status(200).json(`Username has been updated to ${username}`)
    })
}

const updatePassword = (req, res) => {
    const id = parseInt(req.params.id)
    const {password} = req.body.password

    pool.query(queries.updatePassword, [password], (error, results) => {
        if (error) {
            res.status(404).json({
                error: {message: ('Cannot complete the request')}
            })
        }
        res.status(200).json('Password has been updated`')
    })
}

const updateImg = (req, res) => {
    const id = parseInt(req.params.id)
    const {img} = req.body.img

    pool.query(queries.updateImg, [img], (error, results) => {
        if (error) {
            res.status(404).json({
                error: {message: ('Cannot complete the request')}
            })
        }
        res.status(200).json('Image has been updated')
    })
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUsername,
    updatePassword,
    updateImg
}