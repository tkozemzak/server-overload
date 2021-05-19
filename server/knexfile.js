module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: "server-overload-db",
            host: "localhost",
            user: 'postgres',
            password: 'postgres'
        },
        migrations: {
            directory: __dirname + '/migrations',
          },
        seeds: {
            directory: __dirname + '/seeds',
          },
      },
    
}