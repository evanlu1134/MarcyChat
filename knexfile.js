/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

    development: {
      client: 'pg',
      connection: {
        database: 'marcy',
        user:     'marcy',
        password: 'marcy',
        host: 'localhost'
    }
},
  
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
    //2