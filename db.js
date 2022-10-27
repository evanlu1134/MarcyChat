const { Pool } = require('pg')
const pool = new Pool({
  development: {
    database: 'marcy_chat',
    user: 'evanlu0614',
    password: 'elu',
    host: 'localhost'
  }

})



module.exports = { pool }