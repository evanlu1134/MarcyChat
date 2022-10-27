/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

    development: {
      client: 'pg',
      connection: {
        database: 'marcy_chat',
        user:     'evanlu0614',
        password: 'elu',
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
  
    