
// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'marcy_chat',
      user:     'root',
      password: 'e',
      port: 5433,
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};