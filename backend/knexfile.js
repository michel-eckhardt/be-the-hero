// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'hero',
      user:     'postgres',
      password: 'root'
    },
    migrations:{
      directory: './src/db/migrations'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'hero-teste',
      user:     'postgres',
      password: 'root'
    },
    migrations:{
      directory: './src/db/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'hero',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'hero',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
