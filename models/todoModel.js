const { sequelize } = require(".");

let todoSchema = (sequelize, DataTypes) => {
    const Todo = sequelize.define("todo", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    })

    return Todo;
}

module.exports = todoSchema;