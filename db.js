const { Pool } = require('pg')
const connectionDevelopment = {
    database: 'marcy_chat',
    user: '',
    password: '',
    host: 'localhost',
  }
  const connectionProduction = {
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}
  }
const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionDevelopment)
module.exports = {
    pool
}