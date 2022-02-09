// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'ec2-3-227-195-74.compute-1.amazonaws.com',
      user: 'hydjoabloxujtv',
      password:
        'd535f593f1adc548a438211fe1d8e2060cc68db22e1ad25dadaeb9a2eb61b6a3',
      database: 'd1gie6vfg3hkej'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }
}
