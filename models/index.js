const { Sequelize, DataTypes } = require('sequelize');

const dbConfig = require('../config/dbConfig.js');
const todoSchema = require('./todoModel.js');

const sequelize = new Sequelize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        port: dbConfig.port,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        define: {
            timestamps: false
        },

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
    .then(() => {
        console.log('connected...');
    })
    .catch(err => {
        console.log('error : ' + err);
    })

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = todoSchema(sequelize, DataTypes);

db.sequelize.sync({ alter: true })
    .then(() => {
        console.log('resync done.');
    })
    .catch((err) => {
        console.log("error : " + err);
    })

module.exports = db;