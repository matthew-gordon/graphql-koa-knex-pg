// Update with your config settings.
const path = require('path')

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/koa_graphql_knex_pg',
    migrations: {
      directory: path.resolve(__dirname, '../db/migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, '../db/seeds')
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhostpostgres://localhost/koa_graphql_knex_pg_test',
    migrations: {
      directory: path.resolve(__dirname, '../db/migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, '../db/seeds')
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.resolve(__dirname, '../db/migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, '../db/seeds')
    }
  }

};
