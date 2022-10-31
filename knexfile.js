
// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'marcy_chat',
      user:     '',
      password: '',
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};