import dotenv from 'dotenv'
import { join } from 'path'
import { IGlobalConfig } from './interfaces/config.interfaces'
dotenv.config({ path: join(__dirname, '/../.env') })

const config: IGlobalConfig = {

    developement: {
        server: {
            port: process.env.APP_PORT || '3000',
            hostname: process.env.APP_HOST || 'localhost',
            protocol: process.env.APP_PROTOCOL || 'http'
        },
        jwt: {
            access: {
                secret: process.env.ACC_TOKEN_SECRET || '',
                ttl: process.env.ACC_TOKEN_TTL  || ''
            },
            refresh: {
                secret: process.env.REF_TOKEN_SECRET  || '',
                ttl: process.env.REF_TOKEN_TTL  || ''
            },
        },
        db: {
            client: process.env.DB_CLIENT || 'postgres',
            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT
        }
    },

    production: {
        server: {
            port: process.env.APP_PORT || '3000',
            hostname: process.env.APP_HOST || 'localhost',
            protocol: process.env.APP_PROTOCOL || 'http'
        },
        jwt: {
            access: {
                secret: process.env.ACC_TOKEN_SECRET || '',
                ttl: process.env.ACC_TOKEN_TTL  || ''
            },
            refresh: {
                secret: process.env.REF_TOKEN_SECRET  || '',
                ttl: process.env.REF_TOKEN_TTL  || ''
            },
        },
        db: {
            client: process.env.DB_USER || 'postgres',
            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT
        }
    },
}

export default config['developement']