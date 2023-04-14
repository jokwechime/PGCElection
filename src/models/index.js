const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected')
})
.catch(err => {
    console.log('Error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.subscribers = require('./subscriberModel.js')(sequelize, DataTypes)
db.positions = require('./positionModel.js')(sequelize, DataTypes)
db.nominations = require('./nominationModel.js')(sequelize, DataTypes)
db.votings = require('./votingModel.js')(sequelize, DataTypes)
db.votersLists = require('./votersListModel.js')(sequelize, DataTypes)

db.sequelize.sync( { force: false })   // if force = true, we receate schemas all the time, you will lose all your data
.then(() => {
    console.log('yes re-sync done!!!')
})

module.exports = db

