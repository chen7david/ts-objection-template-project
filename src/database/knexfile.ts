import type { Knex } from "knex";
import { join } from 'path'
import config from '../config'
// import dotenv from 'dotenv'
// dotenv.config({ path: '../../.env' })

const dbConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: join(__dirname, "/dev.sqlite3")
    },
    useNullAsDefault: true
  },

  staging: {
    client: "postgresql",
    connection: {
      database: config.db.database,
      user: config.db.username,
      password: config.db.password,
    },
    pool: {
      min: config.db.poolMin || 2,
      max: config.db.poolMax || 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: config.db.database,
      user: config.db.username,
      password: config.db.password,
    },
    pool: {
      min: config.db.poolMin || 2,
      max: config.db.poolMax || 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

export default dbConfig