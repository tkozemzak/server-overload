require('dotenv').config()
module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: process.env.DATABASE,
            host: process.env.HOST,
            port: process.env.PORT,
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD
        },
        migrations: {
            directory: __dirname + '/migrations',
          },
        seeds: {
            directory: __dirname + '/seeds',
          },
      },
    
}