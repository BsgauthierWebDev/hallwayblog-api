const getUsers = 'SELECT * FROM users'
const getUserById = 'SELECT * FROM users WHERE id = $1'
const checkUsernameExists = 'SELECT s FROM users s WHERE s.username = $1'
const checkEmailExists = 'SELECT s FROM users s WHERE s.email = $1'
const addUser = 'INSERT INTO users (username, email, password, img) VALUES ($1, $2, $3, $4)'
const removeUser = 'DELETE FROM users WHERE id = $1'
const updateUsername = 'UPDATE users SET username = $1 WHERE id = $2'
const updatePassword = 'UPDATE users SET password = $1 WHERE id = $2'
const updateImg = 'UPDATE users SET img = $1 WHERE id = $2'

const getPosts = 'SELECT * FROM posts'
const getPostById = 'SELECT * FROM posts WHERE id = $1'
const addPost = 'INSERT INTO posts (title, description, img, userid) VALUES ($1, $2, $3, $4)'
const removePost = 'DELETE FROM posts WHERE id = $1'
const updatePost = 'UPDATE posts SET title = $1, description = $2, img = $3 WHERE id = $4'

module.exports = {
    getUsers,
    getUserById,
    checkUsernameExists,
    checkEmailExists,
    addUser,
    removeUser,
    updateUsername,
    updatePassword,
    updateImg,
    getPosts,
    getPostById,
    addPost,
    removePost,
    updatePost
}