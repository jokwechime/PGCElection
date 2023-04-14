module.exports = {
    HOST:  'us-cdbr-east-06.cleardb.net',
    USER:  'bb8b34237224f6',
    PASSWORD: 'fba043a9',
    DB:  'heroku_1a6a2828e9d530a',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }
}