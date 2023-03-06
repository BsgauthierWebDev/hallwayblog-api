const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hallwayblog',
    password: 'password',
    port: 5432
})

module.exports = db